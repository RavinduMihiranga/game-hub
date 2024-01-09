import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";

// !!! The difference between null and undefined
// * undefined : the absence of a value
// * null : the intentional absence of a value

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
        // ! Use Zustand to avoid prop drilling
        // onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
          // ! Use Zustand to avoid prop drilling
          // selectedGenreID={gameQuery.genreID}
          // onSelectGenre={(genre) =>
          //   setGameQuery({ ...gameQuery, genreID: genre.id })
          // }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading
          // ! Use Zustand to avoid prop drilling
          // gameQuery={gameQuery}
          />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
              // ! Use Zustand to avoid prop drilling
              // selectedPlatformID={gameQuery.platformID}
              // onSelectPlatform={(platform) =>
              //   setGameQuery({ ...gameQuery, platformID: platform.id })
              // }
              />
            </Box>
            <SortSelector
            // ! Use Zustand to avoid prop drilling
            // sortOrder={gameQuery.sortOrder}
            // onSelectSortOrder={(sortOrder) =>
            //   setGameQuery({ ...gameQuery, sortOrder })
            // }
            />
          </Flex>
        </Box>
        <GameGrid
        // ! Use Zustand to avoid prop drilling
        // gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
