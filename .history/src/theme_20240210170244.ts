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
     100:"#ededed",
     200:"#d3d3d3"
  }
} });

export default theme;
