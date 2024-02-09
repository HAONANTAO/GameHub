import { Box } from "@chakra-ui/react";
import React from "react";

interface Props{
  children: ReactNode
}
const GameCardContainer = () => {
  return <Box width="300px" borderRadius={10} overflow={"hidden"}></Box>;
};

export default GameCardContainer;
