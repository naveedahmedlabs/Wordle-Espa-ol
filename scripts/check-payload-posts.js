import 'dotenv/config';
import config from '../payload.config.ts';
import { getPayload } from 'payload';

async function check() {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: 'posts',
      limit: 100,
    });
    console.log('Payload posts count:', result.docs ? result.docs.length : 0);
    if (result.docs) {
      result.docs.forEach((doc, i) => {
        console.log(`Doc ${i + 1}: title="${doc.title}", slug="${doc.slug}"`);
      });
    }
  } catch (err) {
    console.error('Error querying Payload:', err);
  }
}

check().then(() => process.exit(0));
