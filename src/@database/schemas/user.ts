import { date, datetime, int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";


export const db_user = mysqlTable("users", {
    id: int('id').primaryKey().autoincrement(),
    voornaam: varchar('voornaam', { length: 255 }).notNull(),
    achternaam: varchar('achternaam', { length: 255 }).notNull(),
    gebruikersnaam: varchar('gebruikersnaam', { length: 255 }).notNull().unique(),
    email: varchar('e-mail', { length: 255 }).notNull().unique(),
    wachtwoord: varchar('wachtwoord', { length: 255 }).notNull(),
    geboortedatum: date('geboortedatum').notNull(),
    lastingelog: timestamp('lastingelog').notNull()

})


