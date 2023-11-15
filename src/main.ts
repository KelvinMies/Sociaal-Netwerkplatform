import db from "./@database/db";
import { db_user } from "./@database/schemas/user";

 
async function main (){

    const users = await db.select().from(db_user)
    users[0].
}



