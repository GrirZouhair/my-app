import { env } from "bun";
import express from "express";
import type {Request, Response} from "express";


const app = express();
const port = env.PORT;
app.get('/', (req: Request, res: Response) => {
    res.send("Hello there!!");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
