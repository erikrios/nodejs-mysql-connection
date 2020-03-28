const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

connection.query('CREATE DATABASE javatpoint', (err, result) => {
    if (err) throw err;
    console.log('Database created');
});