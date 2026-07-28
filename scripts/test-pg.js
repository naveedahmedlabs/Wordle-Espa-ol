import pg from 'pg';

const urlClean = 'postgresql://neondb_owner:npg_7koJrb8jQZSy@ep-morning-dream-athlchqe-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require';

async function test() {
  console.log('Testing pg pool with ssl rejectUnauthorized false:');
  try {
    const pool = new pg.Pool({
      connectionString: urlClean,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 5000
    });
    const client = await pool.connect();
    console.log('Pool connected successfully!');
    const res = await client.query('SELECT NOW()');
    console.log('Query result:', res.rows);
    client.release();
    await pool.end();
  } catch (e) {
    console.error('Pool failed:', e);
  }
}

test().then(() => process.exit(0));
