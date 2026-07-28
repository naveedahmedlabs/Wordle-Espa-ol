import 'dotenv/config';
import config from '../payload.config.ts';
import { getPayload } from 'payload';
import fs from 'fs';

async function run() {
  const payload = await getPayload({ config });
  
  // Test if media item exists or create sample buffer
  const sampleBuf = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
  
  try {
    const mediaDoc = await payload.create({
      collection: 'media',
      data: {
        alt: 'Test Pixel',
      },
      file: {
        data: sampleBuf,
        name: 'test-pixel.gif',
        mimetype: 'image/gif',
        size: sampleBuf.length,
      },
    });
    console.log('Created media doc ID:', mediaDoc.id);
  } catch (err) {
    console.error('Error creating media:', err);
  }
}

run().then(() => process.exit(0));
