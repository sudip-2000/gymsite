const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/gymDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a User model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model('User', UserSchema);

// Registration endpoint
app.post('/register', (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err) => {
    if (err) return res.status(500).send('Error registering new user.');
    res.status(200).send('User registered!');
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  User.findOne({ username: req.body.username, password: req.body.password }, (err, user) => {
    if (err || !user) return res.status(401).send('Invalid credentials.');
    res.status(200).send('Login successful!');
  });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
