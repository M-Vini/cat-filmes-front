'use client';
import { useState, useEffect } from "react";  

import { IMovies } from "@/interfaces/movies";
import { MoviesList } from "@/components/MoviesList";

import styles from "./page.module.css";

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
      <MoviesList movies={movies}/>
    </div>
  );
}
