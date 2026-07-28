import { fetch } from 'undici'; // or global fetch

function sanityImageToUrl(imageObj) {
  if (!imageObj?.asset?._ref) return null;
  const ref = imageObj.asset._ref; // e.g. "image-abc123-1200x630-png"
  const parts = ref.split('-');
  if (parts.length < 4) return null;
  const assetId = parts[1];
  const dimensions = parts[2];
  const format = parts[3];
  return `https://cdn.sanity.io/images/v4hsbbd1/production/${assetId}-${dimensions}.${format}`;
}

function convertSanityBodyToLexical(body) {
  if (!Array.isArray(body)) {
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

    // Map markDefs by _key
    const markMap = new Map();
    markDefs.forEach(m => markMap.set(m._key, m));

    if (Array.isArray(block.children)) {
      for (const child of block.children) {
        if (child._type !== 'span') continue;

        let format = 0;
        let linkDef = null;

        if (Array.isArray(child.marks)) {
          for (const m of child.marks) {
            if (m === 'strong') format |= 1; // Bold
            else if (m === 'em') format |= 2; // Italic
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

async function run() {
  const url = 'https://v4hsbbd1.api.sanity.io/v2024-01-01/data/query/production?query=' + encodeURIComponent('*[_type == "post"][0]');
  const res = await fetch(url);
  const data = await res.json();
  const sample = data.result[0];

  console.log('Sanity Image URL:', sanityImageToUrl(sample.featuredImage));
  const lexical = convertSanityBodyToLexical(sample.body);
  console.log('Converted Lexical root children count:', lexical.root.children.length);
  console.log('First converted child:', JSON.stringify(lexical.root.children[0], null, 2));
}

run().catch(console.error);
