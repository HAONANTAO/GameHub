import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres, Platform } from "./interfaces/gameInterfaces";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null,
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav main" `,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}>
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) => {
              setGameQuery({ ...gameQuery, searchText });
            }}></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genre })
              }></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading gameQuery={}></GameHeading>
          <Flex paddingLeft={2} marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }></PlatformSelector>
            </Box>

            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }></SortSelector>
          </Flex>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
