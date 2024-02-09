import { Genres } from "../interfaces/gameInterfaces";

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}
const useGenres = () => {
  useDate<Genre>("genres");
};
export default useGenres;
