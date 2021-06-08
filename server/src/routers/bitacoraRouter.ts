import { Router } from "express";
import AccountRepository from "../repositories/AccountRepository";
import BitacoraRepository from "../repositories/BitacoraRepository";

const bitacoraRouter = Router();

bitacoraRouter.get("/", (req, res) => {
  return BitacoraRepository.getAll().then((data) => {
    res.json(data);
  });
});

export default bitacoraRouter;
