import React from "react";
import { Box, Badge } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
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

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {nombresDivisa[divisa.tipo]}
        </Box>

        <Box>${divisa.saldo}</Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={"teal.500"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
