import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import * as dotenv from "dotenv";
import MySQLProvider from './config/MySQLProvider';

 
dotenv.config({ path: path.join(__dirname, '../environment/.env') });

const app = express();
const port = process.env.PORT || 3002;


// Middlewares
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());

// Iniciar el servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});


// Manejo de errores del servidor
app.on('error', (err: any) => {
  console.error('Error al iniciar el servidor:', err);
});

console.log("MYSQL_HOST:", MySQLProvider.getHost());
console.log("MYSQL_USER:", MySQLProvider.getUser());
console.log("MYSQL_PASSWORD:", MySQLProvider.getPassword());
console.log("MYSQL_DATABASE:", MySQLProvider.getDatabase());

