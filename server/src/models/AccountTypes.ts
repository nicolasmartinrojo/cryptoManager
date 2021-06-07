import db from "../db";
import IAccountTypes, { tiposDivisa } from "../interfaces/IAccountTypes";

const tableName = "tipo_cuenta";
const AccountTypes = {
  get: (type: tiposDivisa): Promise<IAccountTypes> => {
    return db<IAccountTypes>(tableName)
      .where("tipo", "=", type)
      .first()
      .then((row) => row!);
  },
};

export default AccountTypes;
