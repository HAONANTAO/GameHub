import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./interfaces/gameInterfaces";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
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
              onSelectedGenre={(genre) => setSelectedGenre(genre)}></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={se}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
