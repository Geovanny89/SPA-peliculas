import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import React from 'react'
import LandingPage from '../pages/LandingPage/LandingPage'
import { MovieDetails } from '../pages/Details/MovieDetails'

export default function MyRoutes() {
  return (
    <Router>
   <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/movies/:movieId' element={<MovieDetails/>}/>
   </Routes>
   </Router>
  )
}
