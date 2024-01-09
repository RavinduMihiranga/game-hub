/**
 * This file contains the TypeScript code for the "useGenres" custom hook.
 * It utilizes the "useQuery" hook from the "@tanstack/react-query" library
 * to fetch genre data from an API and cache it for 24 hours.
 * The initial data is provided from a local file.
 */

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";

// Define the structure of a Genre object
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // no request will be made to the backend to fetch data until 24 hrs
    initialData: genres, // these data will be inserted into the cache
  });

export default useGenres;
