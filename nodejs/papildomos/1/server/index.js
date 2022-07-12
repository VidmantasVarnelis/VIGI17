const express = require('express');
require('dotenv').config();
const cors = require('cors');
const authRouter = require('./src/routes/auth');
const studentsRouter = require('./src/routes/students');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/students', studentsRouter);
app.all('*', (req, res) => {
  res.status(404).send('Path not found!');
});

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
