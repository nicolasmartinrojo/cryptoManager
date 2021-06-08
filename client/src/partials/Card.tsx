import React from "react";
import { Box, Divider, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import IAccount, { nombresDivisa, tiposDivisa } from "../models/IAccount";

interface Props {
  divisa: IAccount;
}
const Card = ({ divisa }: Props) => {
  const getImage = (type: tiposDivisa) =>
    type === tiposDivisa.CRY
      ? "./CRY.jpg"
      : type === tiposDivisa.PES
      ? "./PES.jpg"
      : "./USD.jpg";

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={getImage(divisa.tipo)}
        alt={nombresDivisa[divisa.tipo]}
        boxSize="200px"
        objectFit="cover"
        w={"100%"}
      />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          ></Box>
        </Box>

        <Box mt="1" fontWeight="semibold" lineHeight="tight" isTruncated>
          <Heading size="lg">{nombresDivisa[divisa.tipo]}</Heading>
        </Box>
        <Divider bg="teal.500" height="1" mx="0" my="4" />
        <Box>$ {divisa.saldo.toFixed(2)}</Box>
      </Box>
    </Box>
  );
};

export default Card;
