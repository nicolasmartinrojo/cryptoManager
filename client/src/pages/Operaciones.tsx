import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import Deposito from "../components/Deposito";
import Retiro from "../components/Retiro";
import Transferencia from "../components/Transferencia";
import { Box, Divider, Heading, VStack } from "@chakra-ui/layout";

const Operaciones = () => {
  return (
    <VStack>
      <Heading>Operaciones</Heading>
      <Divider />
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Tabs>
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
      </Box>
    </VStack>
  );
};

export default Operaciones;
