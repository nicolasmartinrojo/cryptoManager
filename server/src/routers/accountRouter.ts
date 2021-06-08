import { Router } from "express";
import AccountRepository from "../repositories/AccountRepository";

const accountRouter = Router();

accountRouter.get("/", (req, res) => {
  AccountRepository.getAll().then((data) => {
    res.json(data);
  });
});

accountRouter.post("/depositar", (req, res) => {
  const { num, divisa, id_unico } = req.body;
  AccountRepository.deposit(num, divisa, id_unico)
    .then(() => {
      res.json({ success: true });
    })
    .catch((e: Error) => {
      res.json({ success: false, error: e.message });
    });
});

accountRouter.post("/retirar", (req, res) => {
  const { num, divisa, id_unico } = req.body;
  AccountRepository.withdraw(num, divisa, id_unico)
    .then(() => {
      res.json({ success: true });
    })
    .catch((e: Error) => {
      res.json({ success: false, error: e.message });
    });
});

accountRouter.post("/transferir", (req, res) => {
  const { num, divisaFrom, divisaTo, id_unicoFrom, id_unicoTo } = req.body;
  AccountRepository.transfer(
    num,
    divisaFrom,
    divisaTo,
    id_unicoFrom,
    id_unicoTo
  )
    .then(() => {
      res.json({ success: true });
    })
    .catch((e: Error) => {
      res.json({ success: false, error: e.message });
    });
});

export default accountRouter;
