const express = require('express');
const joi = require('joi');
const mysql = require('mysql2/promise');
const DB_CONFIG = require('../../config');
const isLoggedIn = require('../middleware/authorization');

const router = express.Router();

const studentsSchema = joi.object({
  name: joi.string().required(),
  lastName: joi.string().required(),
});

router.get('/', isLoggedIn, async (req, res) => {
  try {
    // console.log('req.userId', req.userId);
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query('SELECT * from students');
    await connection.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.get('/class', isLoggedIn, async (req, res) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query(
      `SELECT class.name AS class_name, students.name, students.last_name from students_has_class 
      JOIN students ON students_has_class.student_id=students.id 
      JOIN class ON students_has_class.class_id=class.id`,
    );
    await connection.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [student] = await connection.query(
      `SELECT * from students WHERE id=${Number(id)}`,
    );
    await connection.end();
    return res.json(student[0] || {});
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/', isLoggedIn, async (req, res) => {
  const { name, last_name: lastName } = req.body;
  try {
    await studentsSchema.validateAsync({ name, lastName });
  } catch (err) {
    return res.status(400).json(err);
  }
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [response] = await connection.query('INSERT INTO students SET ?', {
      name,
      last_name: lastName,
    });
    await connection.end();
    return res.json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
