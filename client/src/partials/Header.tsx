import React from "react";
import { Center, Flex, Stack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex height="12" bg="teal.500" color="white">
      <Stack direction="row">
        <Center w="100px">
          <Link to="/">Home</Link>
        </Center>
        <Center w="100px">
          <Link to="/operaciones/">Operaciones</Link>
        </Center>
        <Center w="100px">
          <Link to="/bitacora/">Bitacora</Link>
        </Center>
      </Stack>
    </Flex>
  );
};

export default Header;
