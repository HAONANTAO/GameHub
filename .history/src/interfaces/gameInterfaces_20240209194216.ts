//basic return result json format

interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface Games {
  id: string;
  name: string;
  background_image: string;
  platforms: {{ platform: Platform }};
}
interface FetchGame {
  count: number;
  results: Games[];
}

export type { Games, FetchGame };
