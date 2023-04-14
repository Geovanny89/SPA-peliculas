import plaholder from '../img/plaholder.png'

export function getMovieImg(path,width) {

  return path ? `https://images.tmdb.org/t/p/w${width}${path}` : plaholder ;
}
//   const imageurl = "https://images.tmdb.org/t/p/w300" + movie.poster_path