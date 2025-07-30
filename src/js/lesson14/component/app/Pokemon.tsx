/**
 * @description Pokemon
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {useState, use, Suspense} from 'react'
import * as React from 'react'

export const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('')

  const loadPokemon = async () => {
    if (!pokemonName) {
      return null
    }

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    )

    if (!response.ok) {
      return {
        error: true,
        message: 'Pokemon could not be found.',
      }
    }

    return await response.json()
  }

  return (
    <>
      <Suspense
        fallback={<div className="text-xs italic text-center">Loading...</div>}
      >
        <PokeCard loadPokemon={loadPokemon()} />
      </Suspense>

      <input
        placeholder="Pikachu, Charmander, ..."
        autoFocus={true}
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        className="p-4 border-primary-600 border-solid border-2"
      />
    </>
  )
}

const PokeCard: React.FC<{
  loadPokemon: Promise<{
    error?: boolean
    message?: string
    sprites?: {front_default: string}
    name?: string
    height?: number
  }>
}> = ({loadPokemon}) => {
  const pokemon = use(loadPokemon)

  if (!pokemon) {
    return null
  }

  if (pokemon.error) {
    return (
      <p className="text-accent-primary text-xs italic text-center">
        {pokemon.message}
      </p>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        className="max-w-2xs"
      />
    </div>
  )
}
