const express = require('express');
const colors = require('colors');

const app = express();

// Middleware

// Basic home route
app.get('/', (req, res) => res.json({ msg: 'Welcome to the contact keeper API.' }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in port ${PORT}...`.rainbow.bold));
