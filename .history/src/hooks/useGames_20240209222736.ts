import useData from "./useData.ts";
import { Games, Genres } from "../interfaces/gameInterfaces.ts";
const useGames = (selectedGenre: Genres | null) => {
  return useData<Games>("/games", { params: { genres: selectedGenre?.id } },[]);
};
export default useGames;
