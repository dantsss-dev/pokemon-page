import { PokemonDetails } from '@/components/PokemonDetails/PokemonDetails'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SkeletonPokeDetail } from '@/components/SkeletonPokeDetail.js/SkeletonPokeDetail'

export default function PokemonSlug() {
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const router = useRouter()

  const onRequestPokemonDetails = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.slug}`, {
        method: 'GET',
      })
      const responseParsed = await response.json()
      setPokemonDetails(responseParsed)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    onRequestPokemonDetails()
  }, [])

  return (
    <div>
      {isError ? (
        <div className="mt-24 flex justify-center items-center text-black font-bold text-center text-6xl">
          <h1>THERE WAS A PROBLEM.</h1>
          <h1>We are working on it.</h1>
        </div>
      ) : isLoading ? (
        <SkeletonPokeDetail />
      ) : (
        <PokemonDetails key={pokemonDetails.id} {...pokemonDetails} />
      )}
    </div>
  )
}
