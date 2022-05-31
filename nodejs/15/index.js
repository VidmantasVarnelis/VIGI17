const express = require('express');
require('dotenv').config();
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const DB_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'vigi17',
};
app.get('/movie', async (req, res) => {
  try {
    const { limit } = req.query;
    const connection = await mysql.createConnection(DB_CONFIG);
    if (limit) {
      const [rows] = await connection.query(
        `SELECT * FROM movie LIMIT ${limit}`,
      );
      connection.end();
      return res.json(rows);
    }
    const [rows] = await connection.query('SELECT * FROM movie');
    connection.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});
app.get('/movie/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('SELECT * FROM movie WHERE id=?', [
      id,
    ]);
    connection.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

app.post('/movie', async (req, res) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const { name, year, imdb, revenue } = req.body;
    // const movieBody = req.body;
    // const [rows] = await connection.query(
    //   `INSERT INTO movie (name,year,imdb,revenue) VALUES ("${name}","${year}",${imdb},${revenue})`,
    // );
    const [data] = await connection.query('SELECT * FROM movie');
    if (data.find((movie) => movie.name === name)) {
      return res.status(400).json({ error: 'Duplicated Movie' });
    }
    if (!name || !year) {
      return res.status(400).json({ error: 'Bad Request' });
    }
    const [rows] = await connection.query(
      'INSERT INTO movie (name,year,imdb,revenue) VALUES (?,?,?,?)',
      [name, year, imdb, revenue],
    );
    connection.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});
app.delete('/movie/:id', async (req, res) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const { id } = req.params;
    const [rows] = await connection.query('DELETE FROM movie WHERE id=?', [id]);
    connection.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
