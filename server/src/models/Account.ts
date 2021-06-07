import db from "../db";
import IAccount from "../interfaces/IAccount";
import { tiposDivisa } from "../interfaces/IAccountTypes";
import cotizar from "../utils/cotizar";
import AccountTypes from "./AccountTypes";

const tableName = "cuenta";

const Account = {
  list: (): Promise<IAccount[]> => {
    return db<IAccount>(tableName).select();
  },
  deposit: async (num: number, divisa: tiposDivisa): Promise<number> => {
    const tipo_cuenta = await AccountTypes.get(divisa);
    return db<IAccount>(tableName)
      .increment("saldo", num)
      .where("id_tipo_cuenta", "=", tipo_cuenta!.id);
  },
  withdraw: async (num: number, divisa: tiposDivisa): Promise<number> => {
    /**
     * @todo: validacion por saldo disponible
     */

    const tipo_cuenta = await AccountTypes.get(divisa);
    return db<IAccount>(tableName)
      .decrement("saldo", num)
      .where("id_tipo_cuenta", "=", tipo_cuenta!.id);
  },

  transfer: async (
    num: number,
    divisaFrom: tiposDivisa,
    divisaTo: tiposDivisa
  ): Promise<number[]> => {
    const rowDivisaFrom = await AccountTypes.get(divisaFrom);
    const rowDivisaTo = await AccountTypes.get(divisaTo);

    const cantATransferir = cotizar(num, rowDivisaFrom, rowDivisaTo);

    console.log(cantATransferir);
    return await Promise.all([
      db<IAccount>(tableName)
        .decrement("saldo", num)
        .where("id_tipo_cuenta", "=", rowDivisaFrom!.id),
      db<IAccount>(tableName)
        .increment("saldo", cantATransferir)
        .where("id_tipo_cuenta", "=", rowDivisaTo!.id),
    ]);
  },
};

export default Account;
