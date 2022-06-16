const express = require('express');
require('dotenv').config();
const cors = require('cors');
const authRouter = require('./src/routes/auth');
const wordRouter = require('./src/routes/word');
const gameRouter = require('./src/routes/game');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/word', wordRouter);
app.use('/api/game', gameRouter);

app.all('*', (_, res) => {
  res.status(404).send('Path not found!');
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
