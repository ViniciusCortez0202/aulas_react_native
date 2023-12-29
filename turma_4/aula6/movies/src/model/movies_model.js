import { getMovies } from "../data/movies_datasource";

export async function getMoviesPerPage(page){
    const movies = await getMovies(page);

    return movies?.results.map((movie) => {
        return {
            title: movie.title,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            avg: movie.vote_average,
            release: movie.release_date,
            description: movie.overview
        }
    })
}