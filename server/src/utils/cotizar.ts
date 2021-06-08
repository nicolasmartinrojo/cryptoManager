import IAccountTypes, { tiposDivisa } from "../interfaces/IAccountTypes";

const cotizar = (
  num: number,
  rowDivisaFrom: IAccountTypes,
  rowDivisaTo: IAccountTypes
) => {
  if (rowDivisaFrom.tipo == tiposDivisa.USD) {
    if (rowDivisaTo.tipo == tiposDivisa.PES) {
      return num / rowDivisaTo.cotizacion;
    } else {
      // rowDivisaTo.CRY
      return num / rowDivisaTo.cotizacion;
    }
  } else if (rowDivisaFrom.tipo == tiposDivisa.PES) {
    if (rowDivisaTo.tipo == tiposDivisa.USD) {
      return num * rowDivisaFrom.cotizacion;
    } else {
      // rowDivisaTo.CRY
      return (num * rowDivisaFrom.cotizacion) / rowDivisaTo.cotizacion;
    }
  } else {
    // (rowDivisaFrom.tipo == tiposDivisa.CRY)
    if (rowDivisaTo.tipo == tiposDivisa.USD) {
      return num * rowDivisaFrom.cotizacion;
    } else {
      // rowDivisaTo.PES
      return (num * rowDivisaFrom.cotizacion) / rowDivisaTo.cotizacion;
    }
  }
};

export default cotizar;
