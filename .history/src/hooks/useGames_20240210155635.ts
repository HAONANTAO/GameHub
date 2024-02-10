import useData from "./useData.ts";
import { Games, Genres, Platform } from "../interfaces/gameInterfaces.ts";
import { GameQuery } from "../App.tsx";
const useGames = (gameQuery: GameQuery) => {
  return useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },

    [gameQuery],
  );
};
export default useGames;
