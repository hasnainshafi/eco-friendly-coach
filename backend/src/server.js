// backend/src/server.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Secret key for JWT
const JWT_SECRET = 'f38d466ac3dec52162850a12526c9847f18517002c321a6cedf0501ae083430d3e3f5afaca1d30185b236cfcce1ab45a3ac6285cf4493d291bf88dd8b8c75d82';

// Middleware to verify token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Register route
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  // Logic to save user to database
  // ...

  // Generate JWT token
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Logic to validate user from database
  // ...

  // Generate JWT token
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route example
app.get('/api/profile', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
