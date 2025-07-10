/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import SearchForm from './app/SearchFrom.tsx'
import MovieGrid from './app/MovieGrid.tsx'
import useMovies from '../hook/useMovies.ts'

export default function App() {
  const {movies, searchMovies, toggleSortMovies} = useMovies()

  return (
    <div className="grid grid-rows-[1fr_5fr] place-items-center h-full gap-20">
      <SearchForm
        searchMovies={searchMovies}
        toggleSortMovies={toggleSortMovies}
      />
      <MovieGrid movies={movies} />
    </div>
  )
}
