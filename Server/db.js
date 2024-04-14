import mysql from 'mysql2';

const connection = mysql.createConnection({
  host     : 'localhost', 
  user     : 'root', 
  password : 'chr200049', 
  database : 'em_system' 
});

export default connection;


