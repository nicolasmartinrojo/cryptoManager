enum tiposDivisa {
  PES = "PES",
  USD = "USD",
  CRY = "CRY",
}

interface IAccountTypes {
  id: number;
  tipo: tiposDivisa;
  cotizacion: number;
}
export { tiposDivisa };
export default IAccountTypes;
