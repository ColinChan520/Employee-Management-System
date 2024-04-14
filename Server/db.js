import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host     : 'localhost', 
  user     : 'root', 
  password : 'chr200049', 
  database : 'em_system',
  waitForConnections: true,
  connectionLimit: 100, 
  queueLimit: 0        
});

export default connection;


