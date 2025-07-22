import { IMovies } from "@/interfaces/movies"
import { MovieCard } from "./MovieCard";

interface Props {
    movies: IMovies[];
}

export const MoviesList = ({movies}: Props) => {
    return (
        <div>
            {movies.map((movie: IMovies) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}