import { moviesApi } from "@/core/api/movie-api";
import { Movie, MovieDBMoviesResponse } from "@/infraestructure/interfaces";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const upcomingMoviesAction = async () : Promise<Movie[]> =>
{
    try{
        const { data } = await moviesApi.get<MovieDBMoviesResponse>('/upcomming');
        
        const movies = data.results.map(movieDbMovie => MovieMapper.fromtheMovieDbToMovie(movieDbMovie))
        
        return movies;
    }catch(error)
    {
        
        throw 'Nose pido obtener las peliculas'
    }
};
