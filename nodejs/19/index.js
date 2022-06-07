const express = require('express');
require('dotenv').config();
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
const DB_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'vigi17',
};

app.get('/company', async (req, res) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('SELECT * FROM company');
    await connection.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.post('/company', async (req, res) => {
  try {
    const {
      name,
      size,
      year,
      description,
      field,
      address,
      img_url: url,
    } = req.body;
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
      img_url: url,
    };
    const [rows] = await connection.query('INSERT INTO company SET ?', data);
    await connection.end();
    return res.status(201).json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});
app.get('/employee', async (req, res) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query(
      'SELECT *, employee.id FROM employee JOIN company ON employee.companyId=company.id',
    );
    await connection.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.get('/employee/:employeeId', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query(
      `SELECT *, employee.id FROM employee JOIN company ON employee.companyId=company.id WHERE employee.id=${employeeId}`,
    );
    await connection.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.post('/employee/:id', async (req, res) => {
  try {
    const { firstname, lastname, gender } = req.body;
    const { id } = req.params;
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('INSERT INTO employee SET ?', {
      companyId: id,
      firstname,
      lastname,
      gender,
    });
    await connection.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
