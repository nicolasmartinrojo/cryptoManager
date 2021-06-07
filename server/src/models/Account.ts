import db from "../db";
import IAccount from "./interfaces/IAccount";

const tableName = "cuenta";

const Account = {
  list: (): Promise<IAccount[]> => {
    return db<IAccount>(tableName).select();
  },
};

export default Account;
