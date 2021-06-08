import IBitacoraReposity from "./IBitacoraRepository";
import IBitacora from "../interfaces/IBitacora";
import Bitacora from "../models/dal/BitacoraDAL";

const BitacoraRepository: IBitacoraReposity = {
  getAll: (): Promise<IBitacora[]> => {
    return Bitacora.list();
  },
  insert: (description: string): Promise<number> => {
    return Bitacora.insert(description);
  },
};

export default BitacoraRepository;
