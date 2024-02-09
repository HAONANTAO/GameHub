import { Genres } from "../interfaces/gameInterfaces";
import {useData} from "../hooks/"
interface FetchGenresResponse {
  count: number;
  results: Genres[];
}
const useGenres = () => {
  useData<Genres>("genres");
};
export default useGenres;
