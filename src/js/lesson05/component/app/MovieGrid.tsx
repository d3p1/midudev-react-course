/**
 * @description Movie grid component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useEffect} from 'react'
import useMovies from '../../hook/useMovies.ts'

export default function MovieGrid() {
  const {movies, searchMovies} = useMovies()

  useEffect(() => {
    searchMovies('The Avengers')
  }, [])

  return (
    <div className="grid grid-cols-3 place-items-center gap-4">
      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.img} alt={movie.title} />
          </div>
        ))}
    </div>
  )
}
