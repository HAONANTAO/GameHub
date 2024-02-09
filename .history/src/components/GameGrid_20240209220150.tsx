import React, { useEffect, useState } from "react";

import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";

import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";

const GameGrid = () => {
  const { error, data, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}>
        {isLoading &&
          skeletons.map((sk) => (
            <GameCardContainer key={sk}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <  <GameCardContainer ></GameCardContainer>
          <GameCard key={g.id} game={g}>
            {g.name}
          </GameCard>
        ))}
      </SimpleGrid>

      {/* <Button isLoading colorScheme="blue"></Button> */}
    </>
  );
};

export default GameGrid;
