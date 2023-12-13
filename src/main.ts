import { config } from "dotenv"
config()

import express from "express"
import db from "./@database/db"
import { db_user } from "./@database/schemas/user"
import { eq } from "drizzle-orm"


const app = express()

app.use(express.json());

app.listen(3000, () => {
    console.log("Host: localhost:3000");
})


app.get("/ping", (req, res) => {
    return res.send("pong");
})


app.get("/users", async (req, res) => {
    const users = await db.select().from(db_user);
    res.send(users)
})


app.get("/users/:id", async (req, res) => {
    const id = Number(req.params.id);
    const users = await db.select().from(db_user).where(eq(db_user.id, id))

    if (!(users.length > 0)) {
        return res.status(400).send({
            msg: "User niet gevonden met id: " + id
        })
    }
    const user = users[0];
    return res.send(user)

})


app.post('/users', async (req, res) => {
    const data = req.body

    if (!data) return res.status(400).send({ msg: "Geen body gevonden in aanvraag." })

    try {
        const id = (await db.insert(db_user).values(data))[0].insertId;
        const user = await db.select().from(db_user).where(eq(db_user.id, id))
        return res.send(user[0])
    } catch (e) {
        console.error(e);
        return res.status(500).send({ msg: "Database Error" })
    }
})






