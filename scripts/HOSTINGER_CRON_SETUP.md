# Hostinger cron setup — auto-refreshing sitemap.xml

This document explains how to make `sitemap.xml` on the live site
(`https://thewordleunlimited.com/sitemap.xml`) regenerate itself daily,
without a redeploy, by running `scripts/server-cron-sitemap.js` from a
Hostinger cron job.

**You only need this if you want the `<lastmod>` to refresh every day on its
own.** If you're happy rebuilding locally and re-uploading `dist/` whenever
you want a fresh sitemap, you don't need any of this — just `npm run build`
covers it.

---

## 1. Confirm your plan supports Node + cron

In hPanel:

1. **Hosting → Advanced → Node.js** — your plan must allow you to create a
   Node.js application. (Available on Premium / Business / Cloud tiers; the
   cheapest Single tier does **not** include it.)
2. **Hosting → Advanced → Cron Jobs** — must be available.
3. **Hosting → Files → SSH Access** is nice-to-have but not required; the
   File Manager works too.

If Node.js isn't on your plan, stop here and stick with the build-time
sitemap (`npm run build` already covers that).

## 2. Upload the script

Upload `scripts/server-cron-sitemap.js` from this repo to your home
directory on the server, **outside** `public_html/`. A safe layout:

```
/home/<YOUR_USERNAME>/
├── cron/
│   └── server-cron-sitemap.js   ← place the script here
└── public_html/                  ← your live site (this is the web root)
    ├── sitemap.xml               ← the script will overwrite this file
    ├── index.html
    ├── wordle-today/index.html
    └── ...
```

Why outside `public_html/`? Because anything inside the web root is publicly
fetchable — you don't want crawlers (or attackers) able to download your
Node source.

You can upload via:

- **hPanel File Manager** → drag-and-drop the file into a new `cron/` folder.
- **FTP** (FileZilla etc.) → upload to `/home/<user>/cron/`.
- **SSH** (if enabled): `scp scripts/server-cron-sitemap.js user@host:~/cron/`.

## 3. Find the Node binary path

Hostinger installs Node into a per-account path that varies by plan. In
SSH (or in hPanel → Terminal) run:

```bash
which node
```

You'll get something like:

```
/usr/bin/node
```

or on newer NodeJS hosting:

```
/opt/alt/alt-nodejs20/root/usr/bin/node
```

Note this exact path — cron jobs run with a stripped-down PATH so you must
spell out the full binary location.

## 4. Sanity-test the script manually

In SSH/Terminal, run:

```bash
/usr/bin/node ~/cron/server-cron-sitemap.js
```

You should see:

```
[2026-05-13T12:00:00.000Z] INFO sitemap written: /home/USER/public_html/sitemap.xml (12 urls, 1965 bytes)
```

Then verify in a browser: <https://thewordleunlimited.com/sitemap.xml>
should show today's date inside the `<lastmod>` for `/wordle-today/`,
`/wordle-hints-today/`, and the locale variants.

If you see `target directory does not exist`, your web root isn't at
`~/public_html/`. Re-run with an explicit override:

```bash
SITEMAP_OUTPUT_PATH=~/domains/thewordleunlimited.com/public_html/sitemap.xml \
  /usr/bin/node ~/cron/server-cron-sitemap.js
```

(That's the typical layout when the site is an add-on domain.)

## 5. Schedule the cron job

In hPanel → **Advanced → Cron Jobs**:

- **Common settings:** `Once a day` (or set a custom expression: `5 0 * * *`
  — runs at 00:05 server time, slightly after midnight to avoid
  ambiguity around DST boundaries).
- **Command:**

  ```bash
  /usr/bin/node /home/<YOUR_USERNAME>/cron/server-cron-sitemap.js >> /home/<YOUR_USERNAME>/cron/sitemap.log 2>&1
  ```

  Replace `<YOUR_USERNAME>` with the value you saw next to `/home/` in step 3.
  If your web root is on an add-on domain, prepend the env var:

  ```bash
  SITEMAP_OUTPUT_PATH=/home/<YOUR_USERNAME>/domains/thewordleunlimited.com/public_html/sitemap.xml /usr/bin/node /home/<YOUR_USERNAME>/cron/server-cron-sitemap.js >> /home/<YOUR_USERNAME>/cron/sitemap.log 2>&1
  ```

The `>> sitemap.log 2>&1` captures both stdout and stderr — each run will
append a single `[ISO timestamp] INFO ...` line so you can audit later.

## 6. Verify the cron ran

After the first scheduled run:

1. SSH/Terminal → `tail -n 5 ~/cron/sitemap.log` should show today's timestamp.
2. `curl -s https://thewordleunlimited.com/sitemap.xml | head -n 12` should
   show today's `<lastmod>` for the daily routes.

## 7. Things to watch out for

- **Atomic write.** The script writes to `sitemap.xml.tmp` and then renames.
  If a crawler hits the URL mid-script, it sees the previous full file —
  never a half-written one.
- **Redeploys overwrite the live sitemap.** If you later run `npm run build`
  locally and upload `dist/` over `public_html/`, you'll overwrite whatever
  the cron wrote. That's fine — the next cron run will rewrite it within
  24h. If you don't want this, exclude `sitemap.xml` from your upload.
- **Date drift.** If you ever change `STATIC_DATE` (the constant near the
  top of the script), upload the new script to the server *and* rebuild
  locally so the two stay in sync.
- **Robots.txt.** Make sure `robots.txt` on the live site references this
  sitemap (`Sitemap: https://thewordleunlimited.com/sitemap.xml`) — that's
  what tells Google to come back and re-fetch.
