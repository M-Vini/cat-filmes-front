'use client';
import { MovieCard } from "@/components/MovieCard";
import { IMovies } from "@/interfaces/movies";
import { useEffect, useState } from "react";


export default function MoviePage() {

    const [moviesNowPlaying, setMoviesNowPlaying] = useState<IMovies[]>([]);

    useEffect(() => {
        
    })

    return (
        <div>
            <h1>teste</h1>
            <MovieCard movies={moviesNowPlaying} />
        </div>
    )
}