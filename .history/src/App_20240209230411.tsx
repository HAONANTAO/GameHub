import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres, Platform } from "./interfaces/gameInterfaces";
import PlatformSelector from "./components/PlatformSelector";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>();
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
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectedGenre={(genre) => setSelectedGenre(genre)}></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            onSelectedPlatform={(platform) =>
              setSelectedPlatform(platform)
            }></PlatformSelector>
          <GameGrid  selectedPlatform={sele} selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
