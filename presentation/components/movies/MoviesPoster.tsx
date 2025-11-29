import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable } from "react-native";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
}

const MoviesPoster = ({ id, poster, smallPoster = false }: Props) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/movie/[id]",
      params: { id: String(id) },
    });
  };

  return (
    <Pressable className="px-2" onPress={handlePress}>
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviesPoster;
