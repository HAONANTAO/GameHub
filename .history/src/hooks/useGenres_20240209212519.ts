import { Genres } from "../interfaces/gameInterfaces";

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}
const useGenres = () => {
  useDate<Genres>("genres");
};
export default useGenres;
