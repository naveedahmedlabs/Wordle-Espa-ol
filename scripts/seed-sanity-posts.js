import 'dotenv/config';
import config from '../payload.config.ts';
import { getPayload } from 'payload';

function sanityImageToUrl(imageObj) {
  if (!imageObj?.asset?._ref) return null;
  const ref = imageObj.asset._ref;
  const parts = ref.split('-');
  if (parts.length < 4) return null;
  const assetId = parts[1];
  const dimensions = parts[2];
  const format = parts[3];
  return `https://cdn.sanity.io/images/v4hsbbd1/production/${assetId}-${dimensions}.${format}`;
}

function convertSanityBodyToLexical(body) {
  if (!Array.isArray(body) || body.length === 0) {
    return {
      root: {
        children: [
          {
            children: [{ detail: 0, format: 0, mode: 'normal', style: '', text: '', type: 'text', version: 1 }],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    };
  }

  const lexicalChildren = [];

  for (const block of body) {
    if (block._type !== 'block') continue;

    const style = block.style || 'normal';
    const childrenNodes = [];
    const markDefs = block.markDefs || [];

    const markMap = new Map();
    markDefs.forEach(m => markMap.set(m._key, m));

    if (Array.isArray(block.children)) {
      for (const child of block.children) {
        if (child._type !== 'span') continue;

        let format = 0;
        let linkDef = null;

        if (Array.isArray(child.marks)) {
          for (const m of child.marks) {
            if (m === 'strong') format |= 1;
            else if (m === 'em') format |= 2;
            else if (markMap.has(m)) {
              const def = markMap.get(m);
              if (def._type === 'link' || def.href) {
                linkDef = def;
              }
            }
          }
        }

        const textNode = {
          detail: 0,
          format,
          mode: 'normal',
          style: '',
          text: child.text || '',
          type: 'text',
          version: 1,
        };

        if (linkDef) {
          childrenNodes.push({
            children: [textNode],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'link',
            version: 2,
            fields: {
              linkType: 'custom',
              url: linkDef.href,
              newTab: linkDef.blank || false,
            },
          });
        } else {
          childrenNodes.push(textNode);
        }
      }
    }

    if (childrenNodes.length === 0) {
      childrenNodes.push({
        detail: 0,
        format: 0,
        mode: 'normal',
        style: '',
        text: '',
        type: 'text',
        version: 1,
      });
    }

    if (style.startsWith('h') && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(style)) {
      lexicalChildren.push({
        children: childrenNodes,
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'heading',
        tag: style,
        version: 1,
      });
    } else {
      lexicalChildren.push({
        children: childrenNodes,
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'paragraph',
        version: 1,
      });
    }
  }

  return {
    root: {
      children: lexicalChildren,
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  };
}

async function seed() {
  console.log('Fetching posts from Sanity...');
  const sanityUrl = 'https://v4hsbbd1.api.sanity.io/v2024-01-01/data/query/production?query=' + encodeURIComponent('*[_type == "post"]');
  const res = await fetch(sanityUrl);
  const json = await res.json();
  const sanityPosts = json.result || [];
  console.log(`Found ${sanityPosts.length} posts in Sanity.`);

  console.log('Initializing Payload CMS...');
  const payload = await getPayload({ config });
  console.log('Payload CMS Initialized successfully!');

  const mediaCache = new Map();
  let createdCount = 0;
  let updatedCount = 0;

  for (let i = 0; i < sanityPosts.length; i++) {
    const post = sanityPosts[i];
    const slug = post.slug?.current;
    if (!slug) {
      console.warn(`[${i + 1}/${sanityPosts.length}] Skipping post missing slug: "${post.title}"`);
      continue;
    }

    const title = post.title || 'Untitled Post';
    console.log(`Processing [${i + 1}/${sanityPosts.length}]: "${title}" (${slug})`);
    const metaTitle = post.metaTitle || title;
    const metaDescription = post.metaDescription || post.excerpt || '';
    const content = convertSanityBodyToLexical(post.body);
    const createdAt = post.publishedAt || post._createdAt || new Date().toISOString();

    let mediaId = null;
    const imageUrl = sanityImageToUrl(post.featuredImage);

    if (imageUrl) {
      if (mediaCache.has(imageUrl)) {
        mediaId = mediaCache.get(imageUrl);
      } else {
        try {
          console.log(`  Downloading image: ${imageUrl}`);
          const imgRes = await fetch(imageUrl);
          if (imgRes.ok) {
            const buffer = Buffer.from(await imgRes.arrayBuffer());
            const ext = imageUrl.endsWith('.png') ? 'png' : 'jpg';
            const filename = `sanity-${slug}.${ext}`;
            const mediaDoc = await payload.create({
              collection: 'media',
              data: {
                alt: post.featuredImage?.alt || title,
              },
              file: {
                data: buffer,
                name: filename,
                mimetype: ext === 'png' ? 'image/png' : 'image/jpeg',
                size: buffer.length,
              },
            });
            mediaId = mediaDoc.id;
            mediaCache.set(imageUrl, mediaId);
            console.log(`  Saved media ID: ${mediaId}`);
          }
        } catch (imgErr) {
          console.error(`  Failed media upload for "${slug}":`, imgErr.message);
        }
      }
    }

    const existing = await payload.find({
      collection: 'posts',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
    });

    const postData = {
      title,
      slug,
      content,
      metaTitle,
      metaDescription,
      metaImage: mediaId || undefined,
      createdAt,
    };

    if (existing.docs && existing.docs.length > 0) {
      const existingDoc = existing.docs[0];
      await payload.update({
        collection: 'posts',
        id: existingDoc.id,
        data: postData,
      });
      updatedCount++;
      console.log(`  [UPDATED]: ${title}`);
    } else {
      await payload.create({
        collection: 'posts',
        data: postData,
      });
      createdCount++;
      console.log(`  [CREATED]: ${title}`);
    }
  }

  console.log(`\n✅ Seeding Complete! Total created: ${createdCount}, Total updated: ${updatedCount}`);
}

seed().then(() => process.exit(0)).catch(err => {
  console.error('Fatal seed error:', err);
  process.exit(1);
});
