import { useSelector } from 'react-redux'
import { PokeCard } from '@/components/PokeCard/PokeCard'
import { favoritesPokemonSelector } from '@/store/favorites'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function FavoritePokemon() {
  const [sortedPokemons, setSortedPokemons] = useState([])
  const favPokemon = useSelector(favoritesPokemonSelector)
  const onRequestFavoritePokemonsList = () => {
    return [...favPokemon].sort((a, b) => a.id - b.id)
  }

  useEffect(() => {
    setSortedPokemons(onRequestFavoritePokemonsList())
  }, [setSortedPokemons, favPokemon])

  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex flex-wrap text-center justify-center w-full bg-red-500 text-center py-6 mb-8 text-gray-100">
        <h1 className="w-full text-3xl font-bold">Favorite Pokemon List</h1>
        <Link
          className="md:w-1/4 mt-4 mx-8 items-center transition duration-500 ease-out bg-transparent hover:bg-white text-white font-semibold hover:text-red-500 container  py-2 border border-white hover:border-transparent rounded "
          href={{
            pathname: '/',
            query: {},
          }}
        >
          Go Home
        </Link>
      </div>
      <div>
        {sortedPokemons.length === 0 ? (
          <div className="flex flex-wrap justify-center text-center">
            <p className="w-full text-4xl text-gray-700 py-4">
              You have no Favorite Pokemons Added to your List
            </p>
            <p className="w-full text-xl text-gray-400 pb-4">
              Try checking out the pokedex to add your favorite pokemons
            </p>
            <Link
              className="md:w-auto px-4 items-center transition duration-500 ease-out bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white container mx-4 py-2 border border-gray-700 hover:border-transparent rounded "
              href={{
                pathname: '/',
                query: {},
              }}
            >
              Go to Pokedex
            </Link>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {sortedPokemons.map((pokemon, index) => (
              <PokeCard key={index} {...pokemon} index={pokemon.id} showNickname={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
