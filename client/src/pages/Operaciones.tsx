import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import Deposito from "../components/Deposito";
import Retiro from "../components/Retiro";
import Transferencia from "../components/Transferencia";

const Operaciones = () => {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>Deposito</Tab>
        <Tab>Retiro</Tab>
        <Tab>Transferencia</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Deposito />
        </TabPanel>
        <TabPanel>
          <Retiro />
        </TabPanel>
        <TabPanel>
          <Transferencia />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Operaciones;
