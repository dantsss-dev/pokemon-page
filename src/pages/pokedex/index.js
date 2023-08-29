import { Dropdown } from '@/components/Dropdown'
import NavBar from '@/components/NavBar'
import { useCallback, useEffect, useState } from 'react'
import { TypeFilter } from '@/components/TypeFilter'
import { PokemonCard } from '@/components/PokemonCard'
import { FromToRangeFilter } from '@/components/FromToRangeFilter'
import { useSelector } from 'react-redux'
import { rangeFromToSelector } from '@/store/range/selectors'
import { typeFilterSelector } from '@/store/type/selectors'

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [urlToMorePokemons, setUrlToMorePokemons] = useState(null)
  const rangeValues = useSelector(rangeFromToSelector)
  const typeValues = useSelector(typeFilterSelector)

  const fetchPokemonDetails = (url) => {
    return fetch(url).then((response) => response.json())
  }

  const FilterPokemons = useCallback(
    (pokeDetail) => {
      if (typeValues.length !== 0) {
        pokeDetail = pokeDetail.filter((pokemon) => {
          const pokemonTypes = pokemon.types.map((item) => item.type.name)
          const isTypeIncluded = typeValues.includes(pokemonTypes[0])
          return isTypeIncluded
        })
      }

      if (rangeValues[0].value.from !== 0 && rangeValues[0].value.to !== 0) {
        pokeDetail = pokeDetail.filter((pokemon) => {
          const pokemonStats = pokemon.stats
          const pokemonAttack = pokemonStats.find((item) => item.stat.name === 'attack').base_stat
          const isAttackInRange =
            pokemonAttack >= rangeValues[0].value.from && pokemonAttack <= rangeValues[0].value.to
          return isAttackInRange
        })
      }

      if (rangeValues[1].value.from !== 0 && rangeValues[1].value.to !== 0) {
        pokeDetail = pokeDetail.filter((pokemon) => {
          const pokemonExperience = pokemon.base_experience
          const isExperienceInRange =
            pokemonExperience >= rangeValues[1].value.from &&
            pokemonExperience <= rangeValues[1].value.to
          return isExperienceInRange
        })
      }

      return pokeDetail
    },
    [rangeValues, typeValues],
  )

  const onRequestPokemons = useCallback(async () => {
    let filteredPokemons = []
    let limit = 9
    let sendInfo = []
    while (filteredPokemons.length < 9) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`, {
        method: 'GET',
      })
      const data = await response.json()
      sendInfo = data.results
      console.log(data.results)

      const pokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonDetails = await fetchPokemonDetails(pokemon.url)
          return pokemonDetails
        }),
      )

      filteredPokemons = FilterPokemons(pokemons)
      console.log(filteredPokemons)
      limit += 9
    }
    setPokemons(sendInfo)
    // setPokemons(pokemons)
    // setUrlToMorePokemons(data.next)
  }, [FilterPokemons])

  useEffect(() => {
    onRequestPokemons()
  }, [rangeValues, typeValues, onRequestPokemons])
  return (
    <div>
      <NavBar />
      <div className="pokedex-container">
        <div className="pokedex-header">
          <div className="pokedex-text-header">
            800 <span>Pokemons</span> for you to choose your favorite
          </div>
          <div className="pokedex-controls-container">
            <input type="text" placeholder="Find your pokemon..." className="pokemon-searchbar" />
            <div className="flex w-full items-center justify-start gap-16">
              <Dropdown label={'type'} Children={TypeFilter} />
              <Dropdown label={'attack'} Children={FromToRangeFilter} />
              <Dropdown label={'experience'} Children={FromToRangeFilter} />
              <button className="btn-filters">Filters</button>
            </div>
          </div>
        </div>

        <div className=" flex flex-wrap justify-center gap-y-11">
          {pokemons.map((pokemon, index) => (
            <PokemonCard key={index} {...pokemon} />
          ))}
        </div>
      </div>
    </div>
  )
}
