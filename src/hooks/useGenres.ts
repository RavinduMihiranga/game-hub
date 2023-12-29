import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((response) => response.data),
    staleTime: 1000 * 60 * 60 * 24, // no request will be made to the backend to fetch data until 24 hrs
    initialData: { count: genres.length, results: genres }, // these data will be inserted into the cache
  });

export default useGenres;
