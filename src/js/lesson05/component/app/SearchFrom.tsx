/**
 * @description Search form component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {
  type ChangeEvent,
  useState,
  useEffect,
  useRef,
  type FormEvent,
} from 'react'

const MIN_QUERY_LENGTH = 4
export default function SearchForm({
  searchMovies,
  toggleSortMovies,
}: {
  searchMovies: (query: string) => void
  toggleSortMovies: () => void
}) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState<string | null>(null)
  const isInitRef = useRef(true)

  useEffect(() => {
    if (isInitRef.current) {
      isInitRef.current = query === ''
      return
    }

    if (query === '') {
      setError('Search query could not be empty.')
      return
    }

    if (query.length < MIN_QUERY_LENGTH) {
      setError(`Search query could not be less than ${MIN_QUERY_LENGTH}.`)
      return
    }

    setError('')
  }, [query])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (isInitRef.current || error) {
      return
    }
    searchMovies(query)
  }

  const handleChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement
    const newQuery = input.value
    setQuery(newQuery)
    searchMovies(newQuery)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row justify-center items-center flex-wrap gap-8"
    >
      <div className="text-sm italic">
        <input id="sort" type="checkbox" onChange={toggleSortMovies} />
        <label htmlFor="sort" className="ml-2">
          asc
        </label>
      </div>

      <input
        type="text"
        placeholder="The Avengers, Matrix..."
        name="query"
        value={query}
        onChange={handleChange}
        className="border-secondary border-2 p-5 placeholder:italic"
      />

      <button
        type="submit"
        className="rounded-full p-5 bg-secondary text-primary-900 font-black cursor-pointer"
      >
        Search
      </button>

      {error && (
        <p className="text-accent-secondary text-sm text-center italic w-full">
          {error}
        </p>
      )}
    </form>
  )
}
