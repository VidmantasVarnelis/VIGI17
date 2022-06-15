const express = require('express');
const mysql = require('mysql2/promise');
const isLoggedIn = require('../middleware/authorization');
const DB_CONFIG = require('../config');

const router = express.Router();

router.get('/', isLoggedIn, async (req, res) => {
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query(
      'SELECT id, username, created_at from users',
    );
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/:id', isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query(
      `SELECT id, username, created_at from users WHERE id=${id}`,
    );
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
