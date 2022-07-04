const express = require('express');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, './src/views')))

app.get('/', (req, res) => {
  const name = 'As esu Vidmantas';
  res.render('index', { name });
});
app.get('/about', (req, res) => {
  const person = {
    age: 30,
    name: 'Paulius',
  };
  res.render('about', { person });
});
app.all('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
