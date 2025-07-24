import { IMovies } from "@/interfaces/movies"

interface Props {
    movies: IMovies[];
}

export const MovieCard = ({movies}: Props) => {
    return (
        <div>
            {movies.map((movie: IMovies) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={movie.poster_path} alt={movie.title}/>
                    <p>{movie.overview}</p>
                    <span>{movie.vote_average}</span>
                </div>
            ))}
        </div>
    )
}