const mysql = require('mysql');
const config = require('../config/db-config');

/* connection setup  */
var connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

// establish connection
connection.connect((err) => {
  if (err) throw err;
  else console.log(`Connected to database successfully.`)
});

module.exports = connection;