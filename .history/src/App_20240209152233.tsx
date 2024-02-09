import { Button, ButtonGroup, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav nav "aside main"`}>
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>{" "}
        <GridItem area="aside" bg="gold">
          Nav
        </GridItem>{" "}
        <GridItem area="main" bg="dodgerblue">
          Nav
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
