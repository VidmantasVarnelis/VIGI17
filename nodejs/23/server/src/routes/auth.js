const express = require('express');
const mysql = require('mysql2/promise');
const joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const DB_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'vigi17',
};
const userSchema = joi.object({
  username: joi.string().min(3).required(),
  password: joi.string().min(3).required(),
});

router.post('/register', async (req, res) => {
  try {
    const { password, username } = req.body;
    try {
      await userSchema.validateAsync({ username, password });
    } catch (err) {
      return res.status(400).json(err);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const con = await mysql.createConnection(DB_CONFIG);
    const [data] = await con.query(
      `SELECT * from users WHERE username="${username}"`,
    );
    if (data[0]) {
      return res.status(400).json({
        error: 'User with this username already exists!',
      });
    }
    const [rows] = await con.query('INSERT INTO users SET ?', {
      username,
      password: hashedPassword,
    });
    await con.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { password, username } = req.body;
    try {
      await userSchema.validateAsync({ username, password });
    } catch (err) {
      return res.status(400).json(err);
    }
    const con = await mysql.createConnection(DB_CONFIG);
    const [row] = await con.query(
      `SELECT * from users where username="${username}"`,
    );
    const [user] = row;
    if (!user) {
      return res.status(400).json({ error: 'Authentication failed!' });
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      return res.status(400).json({ error: 'Authentication failed!' });
    }
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      process.env.JWT_SECRET,
    );
    return res.status(200).json({
      status: 'Ok',
      user: {
        id: user.id,
        username: user.username,
      },
      token,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
