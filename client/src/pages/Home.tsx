import { VStack } from "@chakra-ui/layout";
import React from "react";
import AccountApi from "../services/AccountApi";

const Home = () => {
  React.useEffect(() => {
    AccountApi.list().then((res) => {
      console.log(res);
    });
  }, []);
  return <VStack>Home</VStack>;
};

export default Home;
