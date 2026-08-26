import pg from 'pg';
async function test() {
  console.log('Testing pg pool with ssl rejectUnauthorized false:');
  try {
    const pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
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
