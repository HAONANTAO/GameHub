//basic return result json format
interface Games {
  id: string;
  name: string;
  background_image: string;
}
interface FetchGame {
  count: number;
  results: Games[];
}

export type { Games, FetchGame };
