import React from "react";
import ReactDOM from "react-dom/client";

//导入chakra UI库
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
