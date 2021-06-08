import React from "react";

import { ChakraProvider, theme, Stack, Center, VStack } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./partials";
import { Home, Bitacora, Operaciones } from "./pages";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Stack>
          <Header />
          <Center>
            <VStack>
              <Switch>
                <Route path="/bitacora">
                  <Bitacora />
                </Route>
                <Route path="/operaciones">
                  <Operaciones />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </VStack>
          </Center>
        </Stack>
      </Router>
    </ChakraProvider>
  );
};
