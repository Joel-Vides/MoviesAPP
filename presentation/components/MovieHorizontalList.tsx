import { Movie } from "@/infraestructure/interfaces";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from "react-native";
import MoviesPoster from "./movies/MoviesPoster";

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
  isLoadingNextPage?: boolean;
}

const MovieHorizontalList = ({
  movies,
  title = "",
  loadNextPage,
  isLoadingNextPage,
}: Props) => {
  return (
    <View className="mb-4">
      <Text className="text-2xl font-bold px-4 mb-2">{title}</Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        showsHorizontalScrollIndicator={false}
        onEndReached={() => {
          if (loadNextPage) {
            loadNextPage();
          }
        }}
        onEndReachedThreshold={0.7}
        ListFooterComponent={
          isLoadingNextPage ? (
            <View className="justify-center items-center px-4">
              <ActivityIndicator />
            </View>
          ) : null
        }
        renderItem={({ item }) => (
          <MoviesPoster
            id={item.id}
            poster={item.poster}
            smallPoster={true}
          />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
