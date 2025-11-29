import { MainSlideShow } from "@/presentation/components";
import MovieHorizontalList from "@/presentation/components/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlatingQuery, populaQuery, topRatedQuery, upcommingQuery } =
    useMovies();

  const safeArea = useSafeAreaInsets();

  if (
    nowPlatingQuery.isLoading ||
    populaQuery.isLoading ||
    topRatedQuery.isLoading ||
    upcommingQuery.isLoading
  ) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <ActivityIndicator size="large" />
        <Text className="text-white mt-2">Cargando películas...</Text>
      </View>
    );
  }

  return (
    <View
      className="flex-1 bg-white"
      style={{ paddingTop: safeArea.top + 10 }}
    >
      <MainSlideShow movies={nowPlatingQuery.data ?? []} />

      <MovieHorizontalList
        movies={populaQuery.data ?? []}
        title="Populares"
        loadNextPage={populaQuery.fetchNextPage}
        isLoadingNextPage={populaQuery.isFetchingNextPage}
      />

      <MovieHorizontalList
        movies={topRatedQuery.data ?? []}
        title="Mejor calificadas"
        loadNextPage={topRatedQuery.fetchNextPage}
        isLoadingNextPage={topRatedQuery.isFetchingNextPage}
      />

      <MovieHorizontalList
        movies={upcommingQuery.data ?? []}
        title="Próximamente"
        loadNextPage={upcommingQuery.fetchNextPage}
        isLoadingNextPage={upcommingQuery.isFetchingNextPage}
      />
    </View>
  );
};

export default HomeScreen;
