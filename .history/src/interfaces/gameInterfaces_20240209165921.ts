interface Games {
  id: string;
  name: string;
}
interface FetchGame {
  count: number;
  results: Games[];
}

export type { Games, FetchGame };
