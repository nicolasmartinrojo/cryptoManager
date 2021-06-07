import express, { Application } from "express";
import cors from "cors";
import accountRouter from "./routers/accountRouter";

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/account", accountRouter);

app.listen(5000, () => console.log("server running "));
