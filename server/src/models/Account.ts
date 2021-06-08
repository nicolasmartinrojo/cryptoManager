import IAccount from "../interfaces/IAccount";
import { tiposDivisa } from "../interfaces/IAccountTypes";
import cotizar from "../utils/cotizar";
import log from "../utils/log";
import AccountTypes from "./AccountTypes";
import AccountDAL from "./dal/AccountDAL";

const Account = {
  list: (): Promise<IAccount[]> => {
    return AccountDAL.list();
  },
  deposit: async (
    num: number,
    divisa: tiposDivisa,
    id_unico: string
  ): Promise<IAccount> => {
    const tipo_cuenta = await AccountTypes.get(divisa);

    const cuenta = await AccountDAL.get({
      id_unico,
      id_tipo_cuenta: tipo_cuenta.id,
    });

    cuenta.saldo = cuenta.saldo + num;
    log(
      `Deposito -> $${num} a la cuenta ${tipo_cuenta.tipo} con número "${id_unico}"`
    );
    AccountDAL.update(cuenta);
    return cuenta;
  },
  withdraw: async (
    num: number,
    divisa: tiposDivisa,
    id_unico: string
  ): Promise<IAccount> => {
    const tipo_cuenta = await AccountTypes.get(divisa);

    const cuenta = await AccountDAL.get({
      id_unico,
      id_tipo_cuenta: tipo_cuenta.id,
    });

    if (cuenta.saldo < num) {
      throw new Error("El saldo es insuficiente");
    }

    cuenta.saldo = cuenta.saldo - num;
    log(
      `Retiro -> $${num} a la cuenta ${tipo_cuenta.tipo} con número "${id_unico}"`
    );
    AccountDAL.update(cuenta);
    return cuenta;
  },
  transfer: async (
    num: number,
    divisaFrom: tiposDivisa,
    divisaTo: tiposDivisa,
    id_unicoTo: string,
    id_unicoFrom: string
  ): Promise<IAccount> => {
    const rowDivisaFrom = await AccountTypes.get(divisaFrom);
    const rowDivisaTo = await AccountTypes.get(divisaTo);

    const cantATransferir = cotizar(num, rowDivisaFrom, rowDivisaTo);
    log(
      `Transferir -> $${num} de la cuenta de ${rowDivisaFrom.tipo} a la cuenta de ${rowDivisaTo.tipo}`
    );
    await Account.withdraw(num, divisaFrom, id_unicoTo);
    return Account.deposit(cantATransferir, divisaTo, id_unicoFrom);
  },
};

export default Account;
