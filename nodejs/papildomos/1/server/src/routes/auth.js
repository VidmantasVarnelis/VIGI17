const express = require('express');
const joi = require('joi');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const DB_CONFIG = require('../../config');

const router = express.Router();

const authSchema = joi.object({
  name: joi.string().required(),
  password: joi.string().min(4).required(),
});

router.post('/register', async (req, res) => {
  const { name, password } = req.body;
  try {
    await authSchema.validateAsync({ name, password });
  } catch (err) {
    return res.status(400).json(err);
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query(
      `SELECT * FROM users WHERE name="${name}"`,
    );
    if (rows.length > 0) {
      return res.status(400).json({
        status: 'Bad Request!',
        error: 'User already exists!',
      });
    }
    const [response] = await connection.query('INSERT INTO users SET ?', {
      name,
      password: hashedPassword,
    });
    await connection.end();
    const token = jwt.sign(
      {
        id: response.insertId,
        name,
      },
      process.env.JWT_SECRET,
    );
    return res.json({
      db: response,
      token,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  const { name, password } = req.body;
  try {
    await authSchema.validateAsync({ name, password });
  } catch (err) {
    return res.status(400).json(err);
  }
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [user] = await connection.query(
      `SELECT * FROM users WHERE name="${name}"`,
    );
    await connection.end();
    if (user.length === 0) {
      return res
        .status(400)
        .json({ status: 'Bad Request!', error: 'User not found!' });
    }
    const compare = await bcrypt.compare(password, user[0].password);
    if (!compare) {
      return res
        .status(400)
        .json({ status: 'Bad Request!', error: 'Password is incorrect!' });
    }
    const token = jwt.sign(
      {
        id: user[0].id,
        name,
      },
      process.env.JWT_SECRET,
    );
    return res.json({
      user: {
        id: user[0].id,
        name: user[0].name,
        created_at: user[0].created_at,
      },
      token,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
