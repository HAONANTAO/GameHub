import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav nav" `,
          lg: `"aside main"`,
        }}>
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>{" "}
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>{" "}
        <GridItem area="main" bg="dodgerblue">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
