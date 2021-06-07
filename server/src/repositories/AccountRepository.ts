import Account from "../models/Account";
import IAccount from "../models/interfaces/IAccount";
import IAccountReposity from "./IAccountRepository";

const AccountRepository: IAccountReposity = {
  getAll: (): Promise<IAccount[]> => {
    return Account.list();
  },
};

export default AccountRepository;
