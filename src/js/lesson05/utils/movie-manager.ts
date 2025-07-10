/**
 * @description Movie manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @todo        Move API key to environment variable
 */
import type {Movie} from '../types'

const API_KEY = '58348021'
const API_BASE_URL = 'https://www.omdbapi.com/'
const API_SEARCH_RESOURCE = 's=:search'
const API_SEARCH_ENDPOINT = `${API_BASE_URL}?apikey=${API_KEY}&${API_SEARCH_RESOURCE}`

export default class MovieManager {
  /**
   * Search movies
   *
   * @param   {string} query
   * @returns {Promise<Movie[]>}
   */
  static async searchMovies(query: string): Promise<Movie[]> {
    const endpoint = API_SEARCH_ENDPOINT.replace(':search', query)

    const res = await fetch(endpoint)
    const data = (await res.json()) as {Search?: [{[key: string]: string}]}
    if (data?.Search) {
      return data.Search.map((movie) => {
        return {
          id: movie.imdbID,
          year: movie.Year,
          title: movie.Title,
          img: movie.Poster,
        }
      })
    }

    return []
  }
}
