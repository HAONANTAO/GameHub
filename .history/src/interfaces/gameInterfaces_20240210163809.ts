//basic return result json format

interface Platform {
  platform?: any;
  id: number;
  name: string;
  slug: string;
}
interface Games {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: {
    map: any;
    platform: Platform;
  };
  metacritic: number;
  rating_top: number;
}
interface FetchGame {
  count: number;
  results: Games[];
}
interface Genres {
  id: number;
  name: string;
  image_background: string;
}
interface FetchResponse<T> {
  count: number;
  results: T[];
}
export type { Games, FetchGame, Platform, Genres, FetchResponse };
