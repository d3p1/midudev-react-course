/**
 * @description Movie grid component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {type Movie} from '../../types'

export default function MovieGrid({movies}: {movies: Movie[]}) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
      {movies &&
        movies.map((movie) => (
          <li
            key={movie.id}
            className="flex flex-col gap-3 justify-start items-center bg-primary-800 p-8 rounded-lg inset-shadow-[black_0_0_1rem] min-h-150 max-w-90"
          >
            <h3 className="font-black text-center">{movie.title}</h3>
            <p className="italic text-sm">{movie.year}</p>
            <img src={movie.img} alt={movie.title} />
          </li>
        ))}
    </ul>
  )
}
