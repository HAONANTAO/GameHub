import { Box } from "@chakra-ui/react";
import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children: Props }) => {
  return (
    <Box width="300px" borderRadius={10} overflow={"hidden"}>
      {Children}
    </Box>
  );
};

export default GameCardContainer;
