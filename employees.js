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

var sqlInsertRecord = "INSERT INTO employees (id, name, age, city, salary) VALUES ('1', 'Erik Rio Setiawan', '22', 'Ponorogo', '900000000')";

connection.query(sqlInsertRecord, (err, result) => {
    if (err) throw err;
    console.log('1 record inserted');
});

var sqlMultipleInsertRecord = "INSERT INTO employees VALUES ?";
var values = [
    ['2', 'Name 2', '20', 'New York', '35840'],
    ['3', 'Name 3', '21', 'Silicon Valley', '54634'],
    ['4', 'Name 4', '28', 'California', '8349']
];
connection.query(sqlMultipleInsertRecord, [values], (err, result) => {
    if (err) throw err;
    console.log('Number of record inserted: ' + result.affectedRows);
    console.log(result);
});

var sqlUpdateRecord = "UPDATE employees SET city = 'Mountain View' WHERE city = 'California'";
connection.query(sqlUpdateRecord, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + ' record(s) updated');
});

var sqlDeleteRecord = "DELETE FROM employees WHERE city = 'New York'";
connection.query(sqlDeleteRecord, (err, result) => {
    if (err) throw err;
    console.log('Number of records deleted: ' + result.affectedRows);
});

var sqlSelectRecord = "SELECT * FROM employees";
connection.query(sqlSelectRecord, (err, result) => {
    if (err) throw err;
    console.log(result);
});