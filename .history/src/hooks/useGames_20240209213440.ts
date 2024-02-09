import useData from "./useData.ts";
import Game from "../interfaces/gameInterfaces.ts"
const useGames = () => {
  return useData<Game>("/games");
};
export default useGames;
