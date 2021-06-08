import IBitacora from "../interfaces/IBitacora";
import BitacoraDAL from "./dal/BitacoraDAL";

const tableName = "bitacora";

const Bitacora = {
  list: (): Promise<IBitacora[]> => {
    return BitacoraDAL.list();
  },
  insert: (description: string): Promise<number> => {
    return BitacoraDAL.insert(description);
  },
};

export default Bitacora;
