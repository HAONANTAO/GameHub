import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name} ${gameQuery.platform?.name}``;
  return <Heading as="h1"></Heading>;
};

export default GameHeading;
