import useData from "./useData.ts";
import { Games, Genres, Platform } from "../interfaces/gameInterfaces.ts";
const useGames = (
  selectedGenre: Genres | null,
  selectedPlatform: Platform | null,
) => {
  return useData<Games>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id],
  );
};
export default useGames;
