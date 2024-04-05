import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import Dogs from "./Dogs";
dotenv.config();

const app: Express = express();
app.use(cors());

const port = process.env.PORT;


// gets list
app.get("/dogs", (req: Request, res: Response) => {
    res.send({Dogs});
});

//get one
app.get("/dogs/:id", (req: Request, res: Response) => {
    console.log(req.params.id)
    const searchId = req.params.id;
    const foundDog = Dogs.find(dog => dog.id === searchId)
    if (!foundDog) {
        res.send(undefined);
        return
    }
    res.send(foundDog)
});

//post

//patch/ update

//delete

app.listen(port, () => {
    console.group();
    console.log(`Server started at port ${port}`);
    console.groupEnd();
});

export default app;