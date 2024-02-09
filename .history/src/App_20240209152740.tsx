import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav nav" `,
          lg: `"nav nav" "aside main"`,
        }}>
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show>
          <GridItem area="aside" bg="gold">
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
