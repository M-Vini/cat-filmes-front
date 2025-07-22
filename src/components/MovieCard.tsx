import { IMovies } from "@/interfaces/movies"


interface Props {
    movie: IMovies;
}

export const MovieCard = ({movie}: Props) => {
    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.poster_path} alt={movie.title}/>
            <p>{movie.overview}</p>
            <span>{movie.vote_average}</span>
        </div>
    )
}