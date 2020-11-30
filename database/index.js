var mysql = require('mysql');
var connection = mysql.createConnection({
  user : 'root',
  password : 'student',
  database : 'Sizes'
});

connection.connect((err) => {
  if (err) console.log(err);
  console.log('MYSQL server connected!');
});

module.exports = connection;