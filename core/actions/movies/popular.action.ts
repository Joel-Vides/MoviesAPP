import { moviesApi } from "@/core/api/movie-api";
import { Movie, MovieDBMoviesResponse } from "@/infraestructure/interfaces";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const popularMovies = async (page: number = 1): Promise<Movie[]> => {
  try {
    const { data } = await moviesApi.get<MovieDBMoviesResponse>("/popular", {
      params: { page },
    });

    const movies = data.results.map((movieDbMovie) =>
      MovieMapper.fromtheMovieDbToMovie(movieDbMovie)
    );

    return movies;
  } catch (error) {
    throw "No se pudo obtener las películas populares";
  }
};
