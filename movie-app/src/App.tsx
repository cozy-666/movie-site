import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState([]);

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
    setMovieList(data.results);
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
