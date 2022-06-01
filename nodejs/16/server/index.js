const express = require('express');
require('dotenv').config();
const mysql = require('mysql2/promise');
const cors = require('cors');
const DB_CONFIG = require('./src/db');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.get('/api/company', async (req, res) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('SELECT * FROM company');
    await connection.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.get('/api/company/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('SELECT * FROM company WHERE id=?', [
      id,
    ]);
    await connection.end();
    res.json(rows[0] || {});
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post('/api/company', async (req, res) => {
  try {
    const { name, size, year, description, field, address } = req.body;
    const connection = await mysql.createConnection(DB_CONFIG);
    if (!name || !description || !field) {
      return res.status(400).json({
        status: 'error',
        msg: 'Missing required field',
      });
    }
    const data = {
      name,
      year,
      size,
      address,
      description,
      field,
    };
    const [rows] = await connection.query('INSERT INTO company SET ?', data);
    await connection.end();
    return res.status(201).json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.get('*', (req, res) => {
  res.status(404).send('Path not found!');
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
