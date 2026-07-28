import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const formatSlug =
  (fallback: string): import("payload").FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === "string") {
      return value
        .replace(/ /g, "-")
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "");
    }
    const fallbackData = data?.[fallback] || originalDoc?.[fallback];
    if (fallbackData && typeof fallbackData === "string") {
      return fallbackData
        .replace(/ /g, "-")
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "");
    }
    return value;
  };

export default buildConfig({
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    {
      slug: "users",
      auth: true,
      fields: [],
    },
    {
      slug: "media",
      upload: {
        staticDir: path.resolve(dirname, 'public/media'),
      },
      fields: [
        {
          name: "alt",
          type: "text",
          required: true,
        },
      ],
    },
    {
      slug: "posts",
      admin: {
        useAsTitle: "title",
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "slug",
          type: "text",
          admin: {
            position: "sidebar",
          },
          hooks: {
            beforeValidate: [formatSlug("title")],
          },
        },
        {
          name: "content",
          type: "richText",
          required: true,
        },
        {
          name: "metaTitle",
          type: "text",
          admin: {
            position: "sidebar",
          },
        },
        {
          name: "metaDescription",
          type: "textarea",
          admin: {
            position: "sidebar",
          },
        },
        {
          name: "metaImage",
          type: "upload",
          relationTo: "media",
          admin: {
            position: "sidebar",
          },
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: (process.env.DATABASE_URL || process.env.DATABASE_URI || "").replace('&channel_binding=require', '').replace('?channel_binding=require', ''),
      ssl: { rejectUnauthorized: false },
    },
    push: false,
  }),
  secret:
    process.env.PAYLOAD_SECRET ||
    "a-secret-key-for-payload-which-should-be-random-12345678",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
