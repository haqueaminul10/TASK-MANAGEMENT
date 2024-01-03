const db= require(`../config/dbConnection.js`)

//SQL QUERY CREATE TABLE
const createTableQuery =`
CREATE TABLE IF NOT EXISTS task(
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(200) NOT NULL,
    details VARCHAR(200) NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id)
)`

// EXECUTE THE QUERY TO CREATE TABLE
db.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating the table:', err.message);
    } 
    //  else {
    //    console.log('Table "task" created successfully');
    //  }
  });