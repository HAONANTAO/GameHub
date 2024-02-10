import { extendTheme, ThemeConfig } from "@chakra-ui/react";

//for the color mode switch
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config,
colors:{
  gray:{}
} });

export default theme;
