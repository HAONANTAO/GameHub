import { Genres } from "../interfaces/gameInterfaces";

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}
const useGenres = () => {
  useData<Genres>("genres");
};
export default useGenres;
