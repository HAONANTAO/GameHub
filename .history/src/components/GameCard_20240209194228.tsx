import React from "react";
import { Games } from "../interfaces/gameInterfaces.ts";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  game: Games;
  children: string;
  key: string;
}
const GameCard = (props: Props) => {
  const { game } = props;
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        {game.platforms.map((platform) => (
          <Text>{platform.platform.name}</Text>
        ))}
      </CardBody>
    </Card>
  );
};

export default GameCard;
