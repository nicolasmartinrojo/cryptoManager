import db from "../db";
import IBitacora from "../interfaces/IBitacora";

const tableName = "bitacora";

const Bitacora = {
  list: (): Promise<IBitacora[]> => {
    return db<IBitacora>(tableName).select();
  },
  insert: (description: string): Promise<number> => {
    return db<IBitacora>(tableName).insert({
      user_id: 1,
      description,
    });
  },
};

export default Bitacora;
