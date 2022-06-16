const express = require('express');
const mysql = require('mysql2/promise');
const joi = require('joi');
const DB_CONFIG = require('../config');
const isLoggedIn = require('../middleware/authorization');

const wordSchema = joi.object({
  word: joi.string().max(25).required(),
  hint: joi.string(),
});

const router = express.Router();

router.get('/', isLoggedIn, async (req, res) => {
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query(
      'SELECT * from words ORDER BY RAND() LIMIT 1',
    );
    await con.end();
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/', isLoggedIn, async (req, res) => {
  try {
    const wordBody = req.body;
    try {
      await wordSchema.validateAsync(wordBody);
    } catch (err) {
      return res.status(400).json(err);
    }
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query('INSERT INTO words SET ?', wordBody);
    await con.end();
    return res.json(rows);
  } catch (err) {
    if (err.errno === 1062) {
      return res.status(400).json(err);
    }
    return res.status(500).json(err);
  }
});

module.exports = router;
