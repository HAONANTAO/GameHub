import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Genres {
  id: number;
  name: string;
}
interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
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
        const response = await apiClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
        });
        setLoading(false);
        console.log("Data received:", response.data.results);
        setData(response.data.results);
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
  return { error, data, isLoading };
};
export default useData;
