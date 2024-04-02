
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();

const app: Express = express();
app.use(cors<Request>());
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("All good!");
});

app.listen(port, () => {
    console.group();
    console.log(`Server started at port ${port}`);
    console.groupEnd();
});

app.use(cors())

export default app;