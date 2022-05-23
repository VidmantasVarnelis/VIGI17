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
    res.json(students);
  } catch (err) {
    res.status(500).json({ status: 'Something went wrong!' });
  }
});

app.get('/api/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const con = await client.connect();
    const student = await con
      .db('VIGI17')
      .collection('students')
      .findOne({ _id: ObjectId(id) });
    await con.close();
    res.json(student);
  } catch (err) {
    res.status(500).json({ status: 'Something went wrong!' });
  }
});

app.patch('/api/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, awards, age } = req.body;
    const con = await client.connect();
    const updatedStudent = await con
      .db('VIGI17')
      .collection('students')
      .updateOne(
        { _id: ObjectId(id) },
        {
          // $set: {
          //   name: name,
          //   awards: awards,
          //   age: age,
          // },
          // lygiai tas pats
          $set: {
            name,
            awards,
            age,
          },
        },
      );
    // const updatedStudent = await con
    //   .db('VIGI17')
    //   .collection('students')
    //   .updateMany(
    //     { age: { $gte: 20 } },
    //     {
    //       $set: {
    //         name: 'Update Many metodas',
    //       },
    //     },
    //   );
    await con.close();
    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ status: 'Something went wrong!' });
  }
});

app.delete('/api/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const con = await client.connect();
    const student = await con
      .db('VIGI17')
      .collection('students')
      .deleteOne({ _id: ObjectId(id) });
    await con.close();
    res.json(student);
  } catch (err) {
    res.status(500).json({ status: 'Something went wrong!' });
  }
});
app.delete('/api/students-age/:age', async (req, res) => {
  try {
    const { age } = req.params;
    const con = await client.connect();
    const student = await con
      .db('VIGI17')
      .collection('students')
      .deleteMany({ age: Number(age) });
    await con.close();
    res.json(student);
  } catch (err) {
    res.status(500).json({ status: 'Something went wrong!' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
