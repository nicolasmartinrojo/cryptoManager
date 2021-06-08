import db from "../../db";
import IAccount from "../../interfaces/IAccount";
import IAccountTypes from "../../interfaces/IAccountTypes";

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
};

export default AccountDAL;
