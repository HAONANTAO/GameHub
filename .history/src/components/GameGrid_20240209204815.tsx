import React, { useEffect, useState } from "react";

import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";

import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";

const GameGrid = () => {
  const { error, game, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}>
        {isLoading &&
          skeletons.map((sk) => <GameCardSkeleton key={sk}></GameCardSkeleton>)}
        {game.map((g) => (
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
