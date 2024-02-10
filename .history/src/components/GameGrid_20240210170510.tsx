import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import { Genres, Platform } from "../interfaces/gameInterfaces.ts";
import { GameQuery } from "../App.tsx";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if(error) return 
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}>
        {isLoading &&
          skeletons.map((sk) => (
            <GameCardContainer key={sk}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard key={g.id} game={g}>
              {g.name}
            </GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>

      {/* <Button isLoading colorScheme="blue"></Button> */}
    </>
  );
};

export default GameGrid;
