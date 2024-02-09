import { Grid, GridItem } from "@chakra-ui/react";
//Template areas#
The templateAreas prop specifies areas within the grid layout. Use template literals to name the area. Now you can reference the area by passing area prop in the <GridItem /> component.
function App() {
  return (
    <>
      <Grid templateAreas={`"nav nav" "aside main"`}>
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
