import { fetchSanityPosts, fetchSanityPostBySlug, fetchAllSanitySlugs } from '../src/lib/sanity.js';

async function test() {
  console.log('--- Testing fetchSanityPosts ---');
  const listData = await fetchSanityPosts(0, 10);
  console.log('Total posts in Sanity:', listData.total);
  console.log('Total pages:', listData.totalPages);
  console.log('Fetched first page posts count:', listData.posts.length);
  if (listData.posts.length > 0) {
    console.log('First post sample:', {
      id: listData.posts[0].id,
      title: listData.posts[0].title,
      slug: listData.posts[0].slug,
      metaImage: listData.posts[0].metaImage,
    });
  }

  console.log('\n--- Testing fetchSanityPostBySlug ---');
  const sampleSlug = listData.posts[0]?.slug;
  if (sampleSlug) {
    const singleData = await fetchSanityPostBySlug(sampleSlug);
    console.log('Single post title:', singleData.post?.title);
    console.log('Single post body blocks count:', singleData.post?.body?.length);
    console.log('Related posts count:', singleData.relatedPosts?.length);
  }

  console.log('\n--- Testing fetchAllSanitySlugs ---');
  const allSlugs = await fetchAllSanitySlugs();
  console.log('Total slugs count:', allSlugs.length);
}

test().then(() => {
  console.log('\n✅ All Sanity integration tests passed successfully!');
  process.exit(0);
}).catch(err => {
  console.error('❌ Test error:', err);
  process.exit(1);
});
