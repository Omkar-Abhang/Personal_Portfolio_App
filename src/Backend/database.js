const express = require('express');
const mysql = require('mysql');

const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

(async()=>{

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'portfolio'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

// API endpoint to receive form data
app.post('/submit', (req, res) => {
    
    const{phone,email,Message}=req.body;
    const sql = "INSERT INTO feedback(phone_no,email,Message) VALUES (?,?,?)";
   
    db.query(sql, [phone, email,Message], (err, result) => {
        if (err) {
            res.status(500).send('Error in saving data to the database');
            return;
        }
        res.send('Data saved successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


})()