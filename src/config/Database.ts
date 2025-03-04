import mysql from 'mysql2/promise';
import MySQLProvider from './MySQLProvider';

const connection = mysql.createPool({
  host: MySQLProvider.getHost(),
  user: MySQLProvider.getUser(),
  password: MySQLProvider.getPassword(),
  database: MySQLProvider.getDatabase(),
  port: Number(MySQLProvider.getPort()),
});

console.log("MySQL Host:", MySQLProvider.getHost());
console.log("MySQL User:", MySQLProvider.getUser());
console.log("MySQL Password:", MySQLProvider.getPassword());
console.log("MySQL Database:", MySQLProvider.getDatabase());
console.log("MySQL Port:", MySQLProvider.getPort());

export default connection;
