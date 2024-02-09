import useData from "./useData.ts";
const useGames = () => {
  return useData<Game>("/games");
};
export default useGames;
