const express = require('express');
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.DB_CONNECTION);

app.get('/api/students', async (req, res) => {
  try {
    const con = await client.connect();
    const students = await con
      .db('VIGI17')
      .collection('students')
      .find()
      .toArray();
    await con.close();
    return res.json(students);
  } catch (err) {
    return res.status(500).json({ status: 'error' });
  }
});

app.post('/api/students', async (req, res) => {
  try {
    const studentsBody = req.body;
    const con = await client.connect();
    const dbResponse = await con
      .db('VIGI17')
      .collection('students')
      .insertOne(studentsBody);
    await con.close();
    return res.json(dbResponse);
  } catch (err) {
    return res.status(500).json({ status: 'error' });
  }
});

app.get('/api/students/:id', async (req, res) => {
  try {
    const { id } = req.params; // - const userId = req.params  - panaudojimas userId.id
    const con = await client.connect();
    const student = await con
      .db('VIGI17')
      .collection('students')
      .findOne({ _id: ObjectId(id) }); // filtravimas pagal viena kazkury pasirinkta property.
    await con.close();

    return res.json(student);
  } catch (err) {
    return res.status(500).json({ status: 'error' });
  }
});

app.get('/api/search', async (req, res) => {
  try {
    const studentsQuery = req.query;
    const con = await client.connect();
    console.log(studentsQuery);
    const students = await con
      .db('VIGI17')
      .collection('students')
      .find({
        age: { $lte: Number(studentsQuery.limit) },
        // name: studentsQuery.name,
      })
      .sort({ age: studentsQuery.sort.toLowerCase() === 'dsc' ? -1 : 1 })
      .toArray();
    await con.close();

    return res.json(students);
  } catch (err) {
    return res.status(500).json({ status: 'error' });
  }
});
app.get('/api/test/:id', async (req, res) => {
  const con = await client.connect();
  const students = await con
    .db('VIGI17')
    .collection('students')
    .find({
      awards: {
        $elemMatch: { name: 'test4' },
      },
    })
    .toArray();
  res.json(students);
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
