import React from "react";

import { ChakraProvider, theme, Stack, Center } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./partials";
import { Home, Bitacora } from "./pages";
import Operaciones from "./pages/Operaciones";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Stack>
          <Header />
          <Center>
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
          </Center>
        </Stack>
      </Router>
    </ChakraProvider>
  );
};
