import {
  nowPlayingAction,
  popularMovies,
  topRatedMovies,
} from "@/core/actions/movies";
import { upcomingMoviesAction } from "@/core/actions/movies/upcomming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {

  const nowPlatingQuery = useQuery({
    queryKey: ["movies", "now-playing"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const popularInfiniteQuery = useInfiniteQuery({
    queryKey: ["movies", "popular"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => popularMovies(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 0 ? undefined : allPages.length + 1,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const popularData = popularInfiniteQuery.data?.pages.flat() ?? [];

  const populaQuery = {
    ...popularInfiniteQuery,
    data: popularData,
  };

  const topRatedInfiniteQuery = useInfiniteQuery({
    queryKey: ["movies", "top-rated"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => topRatedMovies(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 0 ? undefined : allPages.length + 1,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const topRatedData = topRatedInfiniteQuery.data?.pages.flat() ?? [];

  const topRatedQuery = {
    ...topRatedInfiniteQuery,
    data: topRatedData,
  };

  const upcommingInfiniteQuery = useInfiniteQuery({
    queryKey: ["movies", "upcoming"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => upcomingMoviesAction(pageParam),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 0 ? undefined : allPages.length + 1,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const upcommingData = upcommingInfiniteQuery.data?.pages.flat() ?? [];

  const upcommingQuery = {
    ...upcommingInfiniteQuery,
    data: upcommingData,
  };

  return {


    nowPlatingQuery,
    populaQuery,
    topRatedQuery,
    upcommingQuery,
  };
};
