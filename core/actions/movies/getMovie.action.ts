import { moviesApi } from "@/core/api/movie-api";
import { Movie, TheMovieDbItem } from "@/infraestructure/interfaces";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const getMovieAction = async (id: number): Promise<Movie> => {
  try {
    const { data } = await moviesApi.get<TheMovieDbItem>(`/${id}`);

    return MovieMapper.fromtheMovieDbToMovie(data);
  } catch (error) {
    throw "No se pudo obtener la información de la película";
  }
};
