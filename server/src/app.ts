import express, { Application } from "express";
import accountRouter from "./routers/accountRouter";

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/account", accountRouter);

app.listen(5000, () => console.log("server running "));
