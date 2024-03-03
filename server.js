// server.js
const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'public',
  password: 'Guru#123',
  port: 5432,
});

const app = express();
const port = 3001;

app.get('/api/records', (req, res) => {
  pool.query('SELECT * FROM records', (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
q2