const express = require('express');
const mysql = require('mysql2/promise');
const joi = require('joi');
const DB_CONFIG = require('../config');
const isLoggedIn = require('../middleware/authorization');

const gameSchema = joi.object({
  user_id: joi.number().required(),
  word_id: joi.number().required(),
  misses: joi.number().required(),
});

const router = express.Router();

router.get('/', isLoggedIn, async (req, res) => {
  try {
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query(
      'SELECT username,misses,word from game JOIN users ON game.user_id=users.id JOIN words ON game.word_id=words.id ORDER BY misses',
    );
    await con.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/:wordid/', isLoggedIn, async (req, res) => {
  try {
    const { wordid } = req.params;
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query(
      `SELECT username,misses,word,word_id from game JOIN users ON game.user_id=users.id JOIN words ON game.word_id=words.id HAVING game.word_id=${wordid} ORDER BY misses`,
    );
    await con.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/', isLoggedIn, async (req, res) => {
  try {
    const gameBody = req.body;
    try {
      await gameSchema.validateAsync(gameBody);
    } catch (err) {
      return res.status(400).json(err);
    }
    const con = await mysql.createConnection(DB_CONFIG);
    const [rows] = await con.query('INSERT INTO game SET ?', gameBody);
    await con.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
