import React from "react";
import { Games, Platform } from "../interfaces/gameInterfaces.ts";
import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import GameCardContainer from "./GameCardContainer.tsx";

interface Props {
  game: Games;
  children: string;
  key?: string;
}
const GameCard = (props: Props) => {
  const { game } = props;
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (p: Platform) => p.platform,
              )}></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize={"2xl"}>
            {game.name}
            <Emoji></Emoji>
          </Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
