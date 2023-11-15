import { drizzle } from "drizzle-orm/mysql2";
import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env['dbPassword'],
    database: process.env["dbName"],
})


const db = drizzle(connection);

export default db;