enum tiposDivisa {
  PES = "PES",
  USD = "USD",
  CRY = "CRY",
}
enum nombresDivisa {
  PES = "Pesos argentinos",
  USD = "Dolares americanos",
  CRY = "Cripto monedas",
}

interface IAccount {
  tipo: tiposDivisa;
  alias: string;
  saldo: number;
  numero_cuenta: string;
  id_unico: string;
  cotizacion: number;
}

export { tiposDivisa, nombresDivisa };
export default IAccount;
