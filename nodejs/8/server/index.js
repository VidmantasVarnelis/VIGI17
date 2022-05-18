const express = require('express');
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.DB_CONNECTION);

// imame visus studentus
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
// irasome studenta
app.post('/api/students', async (req, res) => {
  try {
    const studentsBody = req.body;
    // studentsBody.university = ObjectId(studentsBody.university)
    // - university pavertinamas i ObjectID
    const con = await client.connect();
    const dbResponse = await con
      .db('VIGI17')
      .collection('students')
      .insertOne({
        ...studentsBody,
        university: ObjectId(studentsBody.university),
      });
    await con.close();
    return res.json(dbResponse);
  } catch (err) {
    return res.status(500).json({ status: 'error' });
  }
});

app.get('/api/search', async (req, res) => {
  try {
    const studentsQuery = req.query;
    const con = await client.connect();
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

app.post('/api/university', async (req, res) => {
  try {
    const con = await client.connect();
    const university = await con
      .db('VIGI17')
      .collection('university')
      .insertOne(req.body);
    await con.close();

    return res.json(university);
  } catch (err) {
    return res.status(500).json({ status: 'error' });
  }
});

app.get('/api/university/students', async (req, res) => {
  try {
    const con = await client.connect();
    // const students = await con
    //   .db('VIGI17')
    //   .collection('students')
    //   .aggregate([
    //     {
    //       // operatorius naudojamas apjungti dvi kolekcijas i viena
    //       $lookup: {
    //         from: 'university', // kolekcijos pavadinimas is kurios norime apjungti duomenis,
    //         localField: 'university', // esamos kolekcijos savybe pagal kuri apjungsim kolekcijas
    // kitos kolekcijos siuo atveju university savybe pagal kuri apjungsim lenteles
    //         foreignField: '_id',
    //         as: 'university', // kaip pavadinsime duomenys - savybe name
    //       },
    //     },
    //   ])
    //   .toArray();
    // const students = await con
    //   .db('VIGI17')
    //   .collection('university')
    //   .aggregate([
    //     {
    //       // operatorius naudojamas apjungti dvi kolekcijas i viena
    //       $lookup: {
    //         from: 'students', // kolekcijos pavadinimas is kurios norime apjungti duomenis,
    //         localField: '_id', // esamos kolekcijos savybe pagal kuri apjungsim kolekcijas
    // kitos kolekcijos siuo atveju university savybe pagal kuri apjungsim lenteles
    //         foreignField: 'university',
    //         as: 'students', // kaip pavadinsime duomenys - savybe name
    //       },
    //     },
    //   ])
    //   .toArray();
    const students = await con
      .db('VIGI17')
      .collection('students')
      .aggregate([
        // { $match: { name: 'Lukas' } },
        { $match: {} },
        {
          // operatorius naudojamas apjungti dvi kolekcijas i viena savybe
          $lookup: {
            from: 'university', // kolekcijos pavadinimas is kurios norime apjungti duomenis,
            localField: 'university', // esamos kolekcijos savybe pagal kuri apjungsim kolekcijas
            foreignField: '_id',
            as: 'university', // kaip pavadinsime duomenys - savybe name
          },
        },
        {
          $group: {
            _id: '$name',
            sumAge: { $sum: '$age' },
            avgAge: { $avg: '$age' },
            count: { $sum: 1 },
          },
        },
        {
          $sort: {
            avgAge: -1,
          },
        },
      ])
      .toArray();
    await con.close();
    return res.json(students);
  } catch (err) {
    return res.status(500).json({ status: 'error' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
