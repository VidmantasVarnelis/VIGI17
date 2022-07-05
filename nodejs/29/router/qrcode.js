const express = require('express');
const mysql = require('mysql2/promise');
const QRCode = require('qrcode');
const DB_CONFIG = require('../config');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.get('/codes', async (req, res) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('SELECT code FROM QRCODES');
    await connection.end();
    res.render('codes', { rows });
  } catch (err) {
    res.render('404');
  }
});
router.post('/save', async (req, res) => {
  const { qrtext } = req.body;
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const code = await QRCode.toDataURL(qrtext);
    await connection.query('INSERT INTO QRCodes SET ?', { code });
    await connection.end();
    res.redirect('./codes');
  } catch (err) {
    res.render('404');
  }
});

module.exports = router;
