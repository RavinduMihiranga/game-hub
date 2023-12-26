import useData from "./useData";
import { Platform } from "./useGame";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
