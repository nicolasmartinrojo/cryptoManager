import Account from "../models/Account";
import IAccount from "../interfaces/IAccount";
import IAccountReposity from "./IAccountRepository";
import { tiposDivisa } from "../interfaces/IAccountTypes";

const AccountRepository: IAccountReposity = {
  getAll: (): Promise<IAccount[]> => {
    return Account.list();
  },
  deposit: (
    num: number,
    divisa: tiposDivisa,
    id_unico: string
  ): Promise<IAccount> => {
    return Account.deposit(num, divisa, id_unico);
  },
  withdraw: (
    num: number,
    divisa: tiposDivisa,
    id_unico: string
  ): Promise<IAccount> => {
    return Account.withdraw(num, divisa, id_unico);
  },
  transfer: (
    num: number,
    divisaFrom: tiposDivisa,
    divisaTo: tiposDivisa,
    id_unicoTo: string,
    id_unicoFrom: string
  ): Promise<IAccount> => {
    return Account.transfer(
      num,
      divisaFrom,
      divisaTo,
      id_unicoTo,
      id_unicoFrom
    );
  },
};

export default AccountRepository;
