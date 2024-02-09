import React from "react";
import { Games } from "../interfaces/gameInterfaces.ts";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Games;
  children:
}
const GameCard = (props: Props) => {
  const { game } = props;
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
