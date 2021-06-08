import IBitacora from "../interfaces/IBitacora";

interface IBitacoraReposity {
  getAll: () => Promise<IBitacora[]>;
  insert: (description: string) => Promise<number>;
}

export default IBitacoraReposity;
