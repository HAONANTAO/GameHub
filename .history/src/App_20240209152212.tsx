import { Button, ButtonGroup, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav nav "aside main"`}>
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
