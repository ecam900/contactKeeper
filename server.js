const express = require('express');
const colors = require('colors');

const app = express();

// Middleware

// Routes
app.get('/', (req, res) => res.json({ msg: 'Welcome to the contact keeper API.' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in port ${PORT}...`.rainbow.bold));
