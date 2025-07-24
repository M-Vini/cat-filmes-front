'use client';
import { useEffect, useState } from "react";
import { IMovies } from "@/interfaces/movies";
import fetchMovies from "@/components/FetchMovies";
import { MovieCard } from "@/components/MovieCard";

export default function Page() {

  const [movies, setMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    fetchMovies(setMovies, 'top-rated');
  }, []);


  return (
    <div>
      <h1>Filmes em cartaz</h1>
      <MovieCard movies={movies}/>
    </div>
  );
}
