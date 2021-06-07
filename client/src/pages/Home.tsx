import { HStack } from "@chakra-ui/layout";
import React from "react";
import IAccount from "../models/IAccount";
import Card from "../partials/Card";
import AccountApi from "../services/AccountApi";

const Home = () => {
  const [divisas, setDivisas] = React.useState<IAccount[]>([]);
  React.useEffect(() => {
    AccountApi.list().then((res) => {
      setDivisas(res);
    });
  }, []);
  return (
    <HStack>
      {divisas.map((divisa) => (
        <Card divisa={divisa} key={divisa.tipo} />
      ))}
    </HStack>
  );
};

export default Home;
