import Account from "../models/Account";
import IAccount from "../interfaces/IAccount";
import IAccountReposity from "./IAccountRepository";
import { tiposDivisa } from "../interfaces/IAccountTypes";

const AccountRepository: IAccountReposity = {
  getAll: (): Promise<IAccount[]> => {
    return Account.list();
  },
  deposit: (num: number, divisa: tiposDivisa): Promise<number> => {
    return Account.deposit(num, divisa);
  },
  withdraw: (num: number, divisa: tiposDivisa): void => {
    Account.withdraw(num, divisa);
  },
  transfer: (
    num: number,
    divisaFrom: tiposDivisa,
    divisaTo: tiposDivisa
  ): Promise<number[]> => {
    return Account.transfer(num, divisaFrom, divisaTo);
  },
};

export default AccountRepository;
