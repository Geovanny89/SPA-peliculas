import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MovieCard from './components/MovieCard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <MovieCard/>
    <ContextmovieCard/> */}
  </React.StrictMode>,
)
