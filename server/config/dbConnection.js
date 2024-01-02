const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'task_management',
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0,
});

db.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection failed:', err.message);
    } else {
      console.log('Database connection successful');
      connection.release();
    }
  });

module.exports = db;