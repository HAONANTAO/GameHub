import { extendTheme, ThemeConfig } from "@chakra-ui/react";

//for the color mode switch
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config,
colors:{
  gray:{
     50:"#f9f9f9",
     1000
  }
} });

export default theme;
