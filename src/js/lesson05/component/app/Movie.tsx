/**
 * @description Movie component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useEffect} from 'react'
import useMovies from '../../hook/useMovies.ts'

export default function Movie() {
  const {movies, refreshMovies} = useMovies()

  useEffect(() => {
    refreshMovies('The Avengers')
  }, [])

  return <></>
}
