const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'Localhost',
    user: 'root',
    password: '',
    database: 'javatpoint'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

var sqlCreateTable = 'CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(255), age INT(3), city VARCHAR(255))';

connection.query(sqlCreateTable, (err, result) => {
    if (err) throw err;
    console.log('Table created');
});

var sqlAlterTable = 'ALTER TABLE employees ADD COLUMN salary INT(10)';

connection.query(sqlAlterTable, (err, result) => {
    if (err) throw err;
    console.log('Table altered');
});