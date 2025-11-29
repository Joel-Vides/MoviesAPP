import { Movie } from "@/infraestructure/interfaces";
import React from "react";
import { FlatList, View } from "react-native";
import MoviesPoster from "./movies/MoviesPoster";

interface Props {
  movies: Movie[];
}

export const MainSlideShow = ({ movies }: Props) => {
  return (
    <View className="h-[260px]">
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <MoviesPoster id={item.id} poster={item.poster} />
        )}
      />
    </View>
  );
};
