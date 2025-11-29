import {
  nowPlayingAction,
  popularMovies,
  topRatedMovies,
} from "@/core/actions/movies";
import { upcomingMoviesAction } from "@/core/actions/movies/upcomming.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlatingQuery = useQuery({
    queryKey: ["moving", "now-playing"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const populaQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMovies,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedQuery = useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: topRatedMovies,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const upcommingQuery = useQuery({
    queryKey: ["movies", "upcomming"],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    // methods
    nowPlatingQuery,
    populaQuery,
    topRatedQuery,
    upcommingQuery,

    //properties
  };
};
