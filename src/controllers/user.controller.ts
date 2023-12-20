import db from "../@database/db";
import { db_user } from "../@database/schemas/user";
import {Controller} from "./class/controller";    
import { eq } from "drizzle-orm"

export class UserController extends Controller{
    constructor() { 
        super()
    }
    public async get(id?: string | undefined): Promise<object[] | object> {
        let users: object[] = []
        if (id) {
            users = await db.select().from(db_user).where(eq(db_user.id, Number(id)))
        }
        else {
            users = await db.select().from(db_user);
        }

        if (!(users.length > 0)) {
            if (id) throw Error("User niet gevonden met id: " + id)
            throw Error("Geen users gevonden")
        }
        if (id) return users[0]
        return users
    }

    public async post(data: object | null): Promise<object> {
        if (!data) throw Error("Geen body gevonden in aanvraag.")

        try {
            const id = (await db.insert(db_user).values(data as keyof {}))[0].insertId;
            const user = await db.select().from(db_user).where(eq(db_user.id, id))
            return user[0]
        } catch (e) {
            console.error(e);
            throw Error("Database Error")
        }
    }
}