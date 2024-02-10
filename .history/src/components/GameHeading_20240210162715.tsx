import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {

  const heading = `${gameQuery}`
  return <Heading as="h1"></Heading>;
};

export default GameHeading;
