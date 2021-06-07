import express, { Application } from "express";
import accountRouter from "./routers/accountRouter";

const app: Application = express();

app.use("/account", accountRouter);

app.listen(5000, () => console.log("server running "));
