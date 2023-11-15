import { config } from "dotenv";
import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from 'mysql2/promise';

config()

async function main() {
    const connection = mysql.createPool({
        host: process.env.dbHost,
        user: process.env.dbUser,
        password: process.env['dbPassword'],
        database: process.env["dbName"],
    })
    const db = drizzle(connection);
    console.log("Start Migrations:.....");
    await migrate(db, { migrationsFolder: "./drizzle" })
    console.log("Done!!!!!");
    process.exit(0);
}

main()






