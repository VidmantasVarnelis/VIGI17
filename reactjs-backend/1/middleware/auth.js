const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('token');
  console.log(req.headers);
  if (!req.cookies.jwt && !token) return res.status(401).send('Acces denied');
  try {
    const verified = jwt.verify(
      req.cookies.jwt || token,
      process.env.JWT_SECRET,
    );
    req.user = verified;
    next();
  } catch (e) {
    res.status(400).send('invalid token');
  }
}
module.exports = auth;
