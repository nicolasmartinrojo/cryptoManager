import { Router } from "express";
import AccountRepository from "../repositories/AccountRepository";

const accountRouter = Router();

accountRouter.get("/", (req, res) => {
  AccountRepository.getAll().then((data) => {
    res.json(data);
  });
});

accountRouter.post("/depositar", (req, res) => {
  const { num, divisa } = req.body;
  AccountRepository.deposit(num, divisa).then((success) =>
    res.json({ success })
  );
});

accountRouter.post("/retirar", (req, res) => {
  const { num, divisa } = req.body;
  AccountRepository.withdraw(num, divisa).then((success: number) => {
    res.json({ success: success });
  });
});

accountRouter.post("/transferir", (req, res) => {
  const { num, divisaFrom, divisaTo } = req.body;
  AccountRepository.transfer(num, divisaFrom, divisaTo).then(
    (success: number[]) => {
      const finalSuccess = success.every(function (e) {
        return e === 1;
      });
      res.json({ success: finalSuccess });
    }
  );
});

export default accountRouter;
