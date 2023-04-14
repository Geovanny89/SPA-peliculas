import React from 'react'
import { Link } from 'react-router-dom'
import './movieCard.css'


export default function MovieCard({ movie }) {
  const imageurl = "https://images.tmdb.org/t/p/w300" + movie.poster_path
  return (
    <li className='movieCard'>
      <Link to={'/movies/' + movie.id}>
        <img width={230} height={345} src={imageurl} alt={movie.title} className='movieImage' />
      </Link>
      <div className='titles'>
        {movie.title}</div>
    </li>
  )
}
