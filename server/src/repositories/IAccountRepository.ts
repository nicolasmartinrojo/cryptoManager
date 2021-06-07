import IAccount from "../interfaces/IAccount";
import { tiposDivisa } from "../interfaces/IAccountTypes";

interface IAccountReposity {
  getAll: () => Promise<IAccount[]>;
  deposit: (num: number, divisa: tiposDivisa) => Promise<number>;
  withdraw: (num: number, divisa: tiposDivisa) => void;
  transfer: (
    num: number,
    divisaFrom: tiposDivisa,
    divisaTo: tiposDivisa
  ) => Promise<number[]>;
}

export default IAccountReposity;
