import { useEffect, useState } from 'react';
import './App.css'

type Movie = {
  id: string;
  original_title: string;
  poster_path: string;
  overview: string;
};

type MovieJson = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

function App() {
  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const fetchMovieList = async() => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=ja-JP&page=1',
      {
        headers:{
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
        },
      }
    );
    const data = await response.json();
    setMovieList(
      data.results.map((movie: MovieJson) => ({
        id: movie.id,
        original_title: movie.original_title,
        overview: movie.overview,
        poster_path: movie.poster_path,
      }))
    );
  };

  useEffect(()=>{
    fetchMovieList()
  },[])

  return (
    <div>
      <div>{keyword}</div>
      <input type="text" onChange={(e) => setKeyword(e.target.value)}/>
        {movieList
        .filter((movie) => movie.original_title.includes(keyword))
        .map((movie) =>(
          <div key={movie.id}>
            <p>{movie.original_title}</p>
            <img src={`https://media.themoviedb.org/t/p/w600_and_h900_face${movie.poster_path}`}/>
            <p>{movie.overview}</p>
          </div>
        ))}
    </div>
  )
}

export default App
