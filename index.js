const express = require('express');
const path = require('path');
const app = express();
const db = require('./database');
const port = 3000;

app.use(express.static(path.join(__dirname,'./Frontend')));
app.use(express.json());

app.post('/submit',(req,res)=>{
    const { username, password, address, gender } = req.body;
    
    const insertQuery = `INSERT INTO users (username, password, address, gender) VALUES (?, ?, ?, ?)`;
    
    db.query(insertQuery, [username, password, address, gender], (err, results) => {
        if (err) {
            console.error('Error inserting data into users table:', err);
            res.status(500).json({ message: 'Error inserting data' });
            return;
        }
        console.log('Data inserted into users table');
        res.json({ message: 'Data received and inserted successfully' });
    });
})

app.post('/check-credentials', (req, res) => {
    const { username, password } = req.body;

    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error checking credentials:', err);
            res.status(500).json({ message: 'Error checking credentials' });
            return;
        }
        if (results.length > 0) {
            res.status(200).json({ message: 'Credentials verified' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    });
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

