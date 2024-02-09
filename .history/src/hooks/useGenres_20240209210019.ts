import { useState,useEffect } from "react";


interface Genres{
    id: number;
    name: string;
}
const useGenres = () => {
  const[genres, setGenres)] = useState<Genres[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState(false);
  //after first render running once
  useEffect(() => {
    setLoading(true);
    //when abort fetch HTTP requests
    const controller = new AbortController();

    //先创建一个async函数 但是不可以直接用在effect上面
    const fetchData = async () => {
      try {
        const response = await apiClient.get<FetchGame>("/games", {
          signal: controller.signal,
        });
        setLoading(false);
        console.log("Data received:", response.data.results);
        setGame(response.data.results);
      } catch (err: any) {
        console.error("Error fetching data:", err.message);
        //check the cancer error first
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(true);
      }
    };
    fetchData();
    return () => controller.abort();
  }, []);
  return { error, game, isLoading };
};
export default useGenres;
