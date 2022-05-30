const express = require('express');
require('dotenv').config();
const mysql = require('mysql2/promise');

const main = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'vigi17',
  });
  console.log('Connected to database');
  const app = express();
  app.use(express.json());
  const PORT = process.env.PORT || 3000;

  app.get('/students', async (req, res) => {
    // const database = await connection.execute('SELECT * from students');
    // const params = req.query;
    const [rows, columns] = await connection.execute('SELECT * from students');
    // const [rows, columns] = await connection.execute('SELECT * from students ORDER BY price DESC/ASC LIMIT 10');
    // [
    //     [
    //         {id:5,name:'vuidamnntas'}
    //     ],
    //      [],
    // ]
    await connection.end();
    res.json(rows);
  });
  app.post('/students', async (req, res) => {
    const studentBody = req.body;
    const [rows, columns] = await connection.execute(
      `INSERT INTO students (name, age,graduated,createdAt) VALUES ("${studentBody.name}",${studentBody.age},${studentBody.graduated},"2022-05-30")`,
    );
    res.json(rows);
  });
  app.get('*', (req, res) => {
    res.status(404).send('Not Found');
  });
  app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
};
main();
