import { extendTheme, ThemeConfig } from "@chakra-ui/react";

//for the color mode switch 
const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;
