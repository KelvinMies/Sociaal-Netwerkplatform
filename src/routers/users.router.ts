import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get('/', (req, res) => { 
    new UserController().get().then(data => res.send(data)).catch(e => res.status(400).send({msg : e}))

}); 

userRouter.get("/:id", (req, res) => {
    new UserController().get(req.params.id)
        .then(data => res.send(data))
        .catch(e => res.status(400).send({ msg: e.message }))
});

userRouter.post("/", (req, res) => {
    new UserController().post(req.body)
        .then(data => res.send(data))
        .catch(e => res.status(400).send({ msg: e.message }))
});