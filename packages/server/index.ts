import express from "express";
import type { Request, Response } from "express";

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send("hi there!");
});

app.get('/api/hello', (req: Request, res: Response) => {
    res.json({message : "hello there !!"});
});

app.listen(port, () =>{
    console.log(`Server Is Runing ON http://localhost:${port}`);
})