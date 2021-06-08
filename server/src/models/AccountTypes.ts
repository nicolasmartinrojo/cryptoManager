import IAccountTypes, { tiposDivisa } from "../interfaces/IAccountTypes";
import AccountTypesDAL from "./dal/AccountTypesDAL";

const AccountTypes = {
  get: (type: tiposDivisa): Promise<IAccountTypes> => {
    return AccountTypesDAL.get(type);
  },
};

export default AccountTypes;
