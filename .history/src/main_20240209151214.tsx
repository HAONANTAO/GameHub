import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//导入chakra UI库
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode> </ChakraProvider>
    <App />
  </React.StrictMode>,
);
