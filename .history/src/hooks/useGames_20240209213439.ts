import useData from "./useData.ts";
import Game from "../interfaces/"
const useGames = () => {
  return useData<Game>("/games");
};
export default useGames;
