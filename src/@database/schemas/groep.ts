import { date, int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { db_user } from "./user";


export const db_groepen = mysqlTable("groepen", {
    id: int('id').autoincrement().primaryKey(),
    naam: varchar('naam', { length: 255 }).notNull(),
    beschrijving: text("beschrijving"),
    datum_van_oprichting: date('datum_van_oprichting').notNull(),
    beheerderID: int('beheerderID').notNull().references(() => db_user.id)
}) 