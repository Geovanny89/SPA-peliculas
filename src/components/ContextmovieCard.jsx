import React, { useEffect, useState } from 'react'
import { get } from '../data/httpClient'
import MovieCard from '../components/MovieCard'
import './contextMovieCard.css'

export default function ContextmovieCard() {
  const [movies, setMovies]= useState([]) //inicia en un array vacio
  useEffect(()=>{
    get("/discover/movie").then((data)=>{
      setMovies(data.results)
      console.log(data)
    });
  },[]);
  return (
  
      <ul className='container'>
        {movies.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </ul>
   
  )
}
