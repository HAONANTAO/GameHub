import React from "react";
import ReactDOM from "react-dom/client";

//import chakra UI library
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.ts";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode=""></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
