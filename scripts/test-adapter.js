import dotenv from 'dotenv';
dotenv.config();
import { postgresAdapter } from '@payloadcms/db-postgres';

const adapter = postgresAdapter({
  pool: {
    connectionString: process.env.DATABASE_URL.replace('&channel_binding=require', ''),
    ssl: { rejectUnauthorized: false },
  },
});

console.log('Adapter:', adapter);
