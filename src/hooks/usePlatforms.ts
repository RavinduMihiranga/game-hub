import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platforms>>("/platforms/lists/parents")
        .then((response) => response.data),
    staleTime: 1000 * 60 * 60 * 24, // no request will be made to the backend to fetch data until 24 hrs
    initialData: { count: platforms.length, results: platforms }, // these data will be inserted into the cache
  });

export default usePlatforms;
