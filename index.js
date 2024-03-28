// Import necessary modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo2'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Routes

app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM data';
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    });
});



app.post('/api/users', (req, res) => {
    const { name, email, position } = req.body;
    const sql = 'INSERT INTO data (username,password) VALUES (?, ?)';
    db.query(sql, [username,password], (err, result) => {
        if (err) {
            throw err;
        }
        res.status(201).json({username,password });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
