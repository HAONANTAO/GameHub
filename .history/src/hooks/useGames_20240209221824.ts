import useData from "./useData.ts";
import { Games, Genres } from "../interfaces/gameInterfaces.ts";
const useGames = (selectedGenre: Genres | null) => {
  return useData<Games>("/games");
};
export default useGames;
