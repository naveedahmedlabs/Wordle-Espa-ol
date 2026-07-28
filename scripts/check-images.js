import { fetchSanityPosts, fetchSanityPostBySlug, urlForSanityImage } from '../src/lib/sanity.js';

async function main() {
  const data = await fetchSanityPosts(0, 50);
  console.log(`Fetched ${data.posts.length} posts.`);
  
  let validMetaCount = 0;
  let missingMetaCount = 0;

  data.posts.forEach((p, idx) => {
    if (p.metaImage && p.metaImage.url) {
      validMetaCount++;
      console.log(`[${idx+1}] OK: ${p.metaImage.url.substring(0, 70)}...`);
    } else {
      missingMetaCount++;
      console.log(`[${idx+1}] MISSING: "${p.title}" (slug: ${p.slug})`);
    }
  });

  console.log(`\nValid metaImage URLs: ${validMetaCount} / ${data.posts.length}`);
  console.log(`Missing metaImage URLs: ${missingMetaCount} / ${data.posts.length}`);

  // Check body image blocks across posts
  const sanityUrl = 'https://v4hsbbd1.api.sanity.io/v2024-01-01/data/query/production?query=' + encodeURIComponent('*[_type == "post"]{ title, slug, body, featuredImage }');
  const res = await fetch(sanityUrl);
  const json = await res.json();

  let bodyImageCount = 0;
  json.result.forEach(p => {
    if (Array.isArray(p.body)) {
      p.body.forEach(b => {
        if (b._type === 'image') {
          bodyImageCount++;
          console.log(`Found body image in "${p.title}":`, b);
        }
      });
    }
  });

  console.log(`Total body image blocks in all Sanity posts: ${bodyImageCount}`);
}

main().catch(console.error);
