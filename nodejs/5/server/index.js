const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();
// middlewares
// app.use - naudosim middleware - kazka darysim pries atliekant veiksmus
app.use((_, res, next) => {
  console.log('middleware1');
  const allow = true;
  if (allow) {
    next();
  } else res.send('Negalima prieiti middleware 1');
});
app.use((_, res, next) => {
  console.log('MiddleWare2');
  const allow = true;
  if (allow) {
    next();
  } else res.send('Negalima prieiti middleware 2');
});

app.get('/', (req, res) => {
  res.send('Hello');
  res.end();
});

// const fn = (value) => console.log(value);
// fn();
// const PORT = process.env.PORT ? process.env.PORT : 3001;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
