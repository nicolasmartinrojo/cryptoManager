import express, { Application } from "express";
import cors from "cors";
import accountRouter from "./routers/accountRouter";
import bitacoraRouter from "./routers/bitacoraRouter";

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/account", accountRouter);
app.use("/bitacora", bitacoraRouter);

app.listen(5000, () => console.log("server running "));
