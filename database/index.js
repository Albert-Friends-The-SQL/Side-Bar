// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   user : 'root',
//   password : 'student',
//   database : 'Sizes'
// });

// connection.connect((err) => {
//   if (err) console.log(err);
//   console.log('MYSQL server connected!');
// });

// module.exports = connection;

const { Pool } = require('pg');
const pool = new Pool({
  user: 'jason',
  password: 'password',
  host: 'localhost',
  database: 'sdc',
  port: 5432,
});

pool.connect()
  .then(() => {
    console.log('db connected');
  });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}