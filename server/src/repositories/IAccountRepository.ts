import IAccount from "../interfaces/IAccount";
import { tiposDivisa } from "../interfaces/IAccountTypes";

interface IAccountReposity {
  getAll: () => Promise<IAccount[]>;
  deposit: (
    num: number,
    divisa: tiposDivisa,
    id_unico: string
  ) => Promise<IAccount>;
  withdraw: (
    num: number,
    divisa: tiposDivisa,
    id_unico: string
  ) => Promise<IAccount>;
  transfer: (
    num: number,
    divisaFrom: tiposDivisa,
    divisaTo: tiposDivisa,
    id_unicoTo: string,
    id_unicoFrom: string
  ) => Promise<IAccount>;
}

export default IAccountReposity;
