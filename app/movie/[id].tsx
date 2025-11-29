import { getMovieAction } from "@/core/actions/movies";
import { useQuery } from "@tanstack/react-query";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import {
    ActivityIndicator,
    Image,
    ScrollView,
    Text,
    View,
} from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const numericId = Number(id);

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movie", numericId],
    enabled: !isNaN(numericId),
    queryFn: () => getMovieAction(numericId),
  });

  if (isLoading || !movie) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <ActivityIndicator size="large" />
        <Text className="text-white mt-2">Cargando película...</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: movie.title,
        }}
      />
      <ScrollView className="flex-1 bg-black">
        <Image
          source={{ uri: movie.backdrop || movie.poster }}
          className="w-full h-72"
          resizeMode="cover"
        />
        <View className="p-4">
          <Text className="text-2xl font-bold text-white mb-2">
            {movie.title}
          </Text>

          <Text className="text-yellow-300 mb-2">
            ⭐ {movie.rating.toFixed(1)}{" "}
            {"   "}Estreno:{" "}
            {new Date(movie.release).toLocaleDateString()}
          </Text>

          <Text className="text-gray-200 leading-6">
            {movie.description}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default MovieScreen;
