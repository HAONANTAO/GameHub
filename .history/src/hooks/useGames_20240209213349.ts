import useData from "./useData.ts";
const useGames = () => {
  return useData<Game></Game>("/games");
};
export default useGames;
