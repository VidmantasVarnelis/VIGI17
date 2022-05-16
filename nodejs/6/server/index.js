const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 3001;

const url = process.env.DB_CONNECTION;
const client = new MongoClient(url);

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', async (req, res) => {
  try {
    await client.connect();
    const students = await client
      .db('VIGI17')
      .collection('students')
      .find()
      .toArray();
    console.log(students);
    res.json(students);
    await client.close();
  } catch (err) {
    console.log(err);
    res.status(400).send('Bad Request');
  }
});
app.post('/', async (req, res) => {
  try {
    const studentBody = req.body;
    await client.connect();
    const student = await client
      .db('VIGI17')
      .collection('students')
      .insertOne(studentBody);
    await client.close();
    res.json({
      student: studentBody,
      db: student,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send('Bad Request');
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
