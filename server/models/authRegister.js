const db=require("../config/dbConnection.js");

// SQL query to create the table
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    contactnumber VARCHAR(200) NOT NULL UNIQUE,
    gender ENUM('male','female','others') NOT NULL,
    password VARCHAR(200) NOT NULL,
    role ENUM('user','admin')  NOT NULL DEFAULT 'user'
  )
`;

// EXECUTE THE QUERY TO CREATE TABLE
db.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating the table:', err.message);
    } 
    //  else {
    //    console.log('Table "users" created successfully');
    //  }
  });