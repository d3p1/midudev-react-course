/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import MovieGrid from './app/MovieGrid.tsx'

export default function App() {
  return (
    <div className="grid grid-rows-[1fr_5fr] place-items-center h-full gap-20">
      <form className="flex flex-row justify-center gap-4">
        <input
          type="text"
          placeholder="The Avengers, Matrix..."
          className="border-secondary p-5"
        />
        <button
          type="submit"
          className="rounded-full p-5 bg-secondary text-primary-900 font-black"
        >
          Search
        </button>
      </form>
      <MovieGrid />
    </div>
  )
}
