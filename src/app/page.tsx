'use client';
import { useEffect, useState } from "react";

import { IMovies } from "@/interfaces/movies";

import { MovieCard } from "@/components/MovieCard";

export default function Page() {

  const [movies, setMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`);
        const data = await response.json();
        setMovies(data);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    }
    fetchMovies();
  }, []);


  return (
    <div>
      <h1>Filmes em cartaz</h1>
      <MovieCard movies={movies}/>
    </div>
  );
}
