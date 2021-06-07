import { Router } from "express";
import AccountRepository from "../repositories/AccountRepository";

const accountRouter = Router();
accountRouter.get("/all", (req, res) => {
  AccountRepository.getAll().then((data) => {
    res.json(data);
  });
});

export default accountRouter;
