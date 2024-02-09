import React from "react";
import { Games, Platform } from "../interfaces/gameInterfaces.ts";
import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";

interface Props {
  game: Games;
  children: string;
  key: string;
}
const GameCard = (props: Props) => {
  const { game } = props;
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getgame.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (p: Platform) => p.platform,
            )}></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
