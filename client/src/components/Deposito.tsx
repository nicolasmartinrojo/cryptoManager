import React from "react";
import AccountApi from "../services/AccountApi";
import MovimientoGenerico from "./MovimientoGenerico";

const Deposito = () => {
  return (
    <MovimientoGenerico
      serviceCb={AccountApi.deposit}
      textValue="Cantidad a depositar"
    />
  );
};
export default Deposito;
