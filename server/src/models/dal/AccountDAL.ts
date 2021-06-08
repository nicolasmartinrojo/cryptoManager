import { log } from "console";
import db from "../../db";
import IAccount from "../../interfaces/IAccount";
import IAccountTypes, { tiposDivisa } from "../../interfaces/IAccountTypes";
import cotizar from "../../utils/cotizar";
import AccountTypes from "../AccountTypes";

const tableName = "cuenta";

const AccountDAL = {
  list: (): Promise<IAccount[]> => {
    return db<IAccount & IAccountTypes>(tableName)
      .join("tipo_cuenta", "id_tipo_cuenta", "tipo_cuenta.id")
      .select(
        "alias",
        "id_unico",
        "numero_cuenta",
        "saldo",
        "tipo",
        "cotizacion"
      );
  },
  get: async (params: object): Promise<IAccount> => {
    const element = await db<IAccount>(tableName)
      .select()
      .where(params)
      .first();

    if (!element) {
      throw new Error("El elemento no existe");
    }

    return element;
  },

  update: async (row: IAccount) => {
    const { id } = row;
    return await db<IAccount>(tableName).where({ id }).update(row);
  },
  deposit: async (num: number, divisa: tiposDivisa): Promise<number> => {
    const tipo_cuenta = await AccountTypes.get(divisa);

    log(`Deposito - $${num} a la cuenta ${tipo_cuenta.tipo}`);

    return db<IAccount>(tableName)
      .increment("saldo", num)
      .where("id_tipo_cuenta", "=", tipo_cuenta!.id);
  },
  withdraw: async (num: number, divisa: tiposDivisa): Promise<number> => {
    /**
     * @todo: validacion por saldo disponible
     */

    const tipo_cuenta = await AccountTypes.get(divisa);

    log(`Retiro - $${num} a la cuenta ${tipo_cuenta.tipo}`);

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
    log(
      `Transferir - $${num} de la cuenta de ${rowDivisaFrom.tipo} a la cuenta de ${rowDivisaTo.tipo}`
    );

    /**
     * @todo: validacion por saldo disponible
     */
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

export default AccountDAL;
