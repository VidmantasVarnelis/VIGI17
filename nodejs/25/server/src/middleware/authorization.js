const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
  const headersObj = req.headers;
  if (!headersObj.authorization) {
    return res.status(401).send('Access denied!');
  }
  const token = headersObj.authorization.split(' ')[1];
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (err) {
    return res.status(401).send('Access denied!');
  }
};

module.exports = isLoggedIn;
