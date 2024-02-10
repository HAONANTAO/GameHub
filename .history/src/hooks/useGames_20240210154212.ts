import useData from "./useData.ts";
import { Games, Genres, Platform } from "../interfaces/gameInterfaces.ts";
import { GameQuery } from "../App.tsx";
const useGames = (gameQuery: GameQuery) => {
  return useData<Games>(
    "/games",
    { params: { genres: g?.id, platforms: selectedPlatform?.id } },

    [selectedGenre?.id, selectedPlatform?.id],
  );
};
export default useGames;
