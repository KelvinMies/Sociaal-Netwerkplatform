import type { Config } from "drizzle-kit";
import * as dotenv from 'dotenv'
dotenv.config();

export default {
    out: "./drizzle",
    driver: "mysql2",
    introspect: {
        casing: 'preserve'
    },
    verbose: true,
    dbCredentials: {
        host: process.env.dbHost!,
        user: process.env.dbUser,
        password: process.env.dbPassword,
        database: process.env.dbName!,
    },
    breakpoints: true
} satisfies Config;