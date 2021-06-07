import React from "react";
import AccountApi from "../services/AccountApi";
import MovimientoGenerico from "./MovimientoGenerico";

const Retiro = () => {
  return (
    <MovimientoGenerico
      serviceCb={AccountApi.withdraw}
      textValue="Cantidad a retirar"
    />
  );
};
export default Retiro;
