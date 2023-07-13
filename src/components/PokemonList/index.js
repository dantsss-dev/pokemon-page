import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PokeCard } from '@/components/PokeCard/PokeCard'
import { SkeletonCard } from '@/components/SkeletonCard/SkeletonCard'
import { onSetUserDetail, userSelector } from '@/store/user'
import Link from 'next/link'

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [urlToMorePokemons, setUrlToMorePokemons] = useState(null)
  const [isError, setIsError] = useState(false)
  const dispatch = useDispatch()
  const userName = useSelector(userSelector)

  const onRequestPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0', {
        method: 'GET',
      })
      const responseParsed = await response.json()
      setPokemons(responseParsed.results)
      setUrlToMorePokemons(responseParsed.next)
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
    }
  }

  const onRequestMorePokemons = async () => {
    try {
      const response = await fetch(urlToMorePokemons, {
        method: 'GET',
      })
      const responseParsed = await response.json()
      setPokemons([...pokemons, ...responseParsed.results])
      setUrlToMorePokemons(responseParsed.next)
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }
  }

  const onSetName = () => {
    dispatch(
      onSetUserDetail({
        name: 'Eliseo',
        last_name: 'Palacios',
      }),
    )
  }

  useEffect(() => {
    onRequestPokemons()
  }, [])

  useEffect(() => {
    onSetName()
    console.log(userName)
  }, [userName])

  return (
    <div>
      {isError ? (
        <div className="mt-24 flex justify-center items-center text-black font-bold text-center text-6xl">
          <h1>THERE WAS A PROBLEM.</h1>
          <h1>We are working on it.</h1>
        </div>
      ) : (
        <div>
          {isLoading ? (
            <div className="flex flex-wrap justify-center items-center">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : (
            <div className="bg-gray-200">
              <div className="flex flex-wrap text-center justify-center w-full bg-red-500 text-center py-6 mb-8 text-gray-100">
                <h1 className="w-full text-3xl font-bold">
                  Welcome {userName.name} {userName.last_name}
                </h1>
                <Link
                  className="md:w-1/4 mt-4 mx-8 items-center transition duration-500 ease-out bg-transparent hover:bg-white text-white font-semibold hover:text-red-500 container  py-2 border border-white hover:border-transparent rounded "
                  href={{
                    pathname: '/favorite-list',
                    query: {},
                  }}
                >
                  Favorite Pokemons
                </Link>
              </div>
              <div className="flex flex-wrap">
                {pokemons.map((pokemon, index) => (
                  <PokeCard key={index} {...pokemon} index={index} showNickname={false} />
                ))}
              </div>
              <div className="flex py-8 justify-center">
                <div className="w-full sm:w-1/3 p-2 flex justify-center">
                  <button
                    className="max-w-sm container mx-auto py-2 px-4  shadow-lg transition duration-500 ease-out bg-white hover:bg-gray-700 text-gray-700 font-semibold hover:text-white border border-gray-700 hover:border-transparent rounded "
                    onClick={() => {
                      onRequestMorePokemons(urlToMorePokemons)
                    }}
                  >
                    Show More Pokemons
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
