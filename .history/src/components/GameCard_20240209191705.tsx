import React from "react";
import { Games } from "../interfaces/gameInterfaces.ts";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Games;
}
const GameCard = (props: Props) => {
  const { game } = props;
  return (
    <Card>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
