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
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator color={"purple"} size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">Movies APP</Text>
      <MainSlideShow movies={nowPlatingQuery.data ?? []} />

      {/* Peliculas Populares */}
      <MovieHorizontalList
        movies={populaQuery.data ?? []}
        title="Peliculas Populares"
      />

      <MovieHorizontalList
        movies={topRatedQuery.data ?? []}
        title="Mejor Calificadas"
      />

      <MovieHorizontalList
        movies={upcommingQuery.data ?? []}
        title="Proximamente"
      />
    </View>
  );
};

export default HomeScreen;
