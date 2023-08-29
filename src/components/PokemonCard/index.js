import { useEffect, useState } from 'react'
import { Label } from '../Label'
import Image from 'next/legacy/image'
import { POKEMON_TYPE_COLORS } from '@/constants/pokemon-type-colors'
import { PokemonStat } from '../PokemonStat'

export const PokemonCard = ({ url }) => {
  const [pokemonDetail, setPokemonDetail] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const onRequestPokemonDetail = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
        })
        const responseParsed = await response.json()
        setPokemonDetail(responseParsed)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    onRequestPokemonDetail()
  }, [url])

  return (
    <>
      {!isLoading && (
        <div className="card-container">
          <div className="pokemon-card">
            <div className="card-info-container">
              <div className="pokemon-name">{pokemonDetail.name}</div>
              <div className="flex flex-row gap-3">
                <PokemonStat
                  label={pokemonDetail.stats[1].stat.name}
                  value={pokemonDetail.stats[1].base_stat}
                />
                <PokemonStat
                  label={pokemonDetail.stats[2].stat.name}
                  value={pokemonDetail.stats[2].base_stat}
                />
              </div>
              <div className="flex flex-row gap-3">
                {pokemonDetail.types.map((item) => (
                  <Label
                    key={item.type.name}
                    label={item.type.name}
                    className={`type-container bg-${item.type.name}`}
                  />
                ))}
              </div>
            </div>

            <div
              className="pokemon-image-container"
              style={{
                backgroundColor: POKEMON_TYPE_COLORS.find(
                  (item) => item.type === pokemonDetail.types[0].type.name,
                ).color,
              }}
            >
              <div className="pokemon-image">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`}
                  alt="Pokemon"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
