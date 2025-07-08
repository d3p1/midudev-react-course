/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Movie from './app/Movie.tsx'

export default function App() {
  return (
    <div className="w-1/3">
      <header>
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
        <main>
          <Movie />
        </main>
      </header>
    </div>
  )
}
