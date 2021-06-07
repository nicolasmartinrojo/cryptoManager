import IAccount from "../models/interfaces/IAccount";

interface IAccountReposity {
  getAll: () => Promise<IAccount[]>;
}

export default IAccountReposity;
