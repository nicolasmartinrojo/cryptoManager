import { Divider, Heading } from "@chakra-ui/layout";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import React from "react";
import IBitacora from "../models/IBitacora";
import BitacoraApi from "../services/BitacoraApi";

const Bitacora = () => {
  const [registros, setRegistros] = React.useState<IBitacora[]>([]);
  React.useEffect(() => {
    BitacoraApi.list().then((res) => {
      setRegistros(res);
    });
  }, []);
  return (
    <>
      <Heading>Bitácora</Heading>
      <Divider />
      <Table variant="simple">
        <TableCaption>Últimos movimientos del sistema</TableCaption>
        <Thead>
          <Tr>
            <Th>ID de Registro</Th>
            <Th>Descripcion</Th>
            <Th>ID Usuario</Th>
          </Tr>
        </Thead>
        <Tbody>
          {registros.map((registro) => (
            <Tr key={registro.id}>
              <Td>{registro.id}</Td>
              <Td>{registro.description}</Td>
              <Td isNumeric>{registro.user_id}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Bitacora;
