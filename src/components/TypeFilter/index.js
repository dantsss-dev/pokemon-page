import { POKEMON_TYPE_COLORS } from '@/constants/pokemon-type-colors'
import { typeFilterSelector } from '@/store/type/selectors'
import { onAddPokemonType, onRemovePokemonType } from '@/store/type'
import { useSelector, useDispatch } from 'react-redux'

import { Checkbox } from '../Checkbox'
import { useEffect } from 'react'
export const TypeFilter = () => {
  const pokeTypes = useSelector(typeFilterSelector)
  const dispatch = useDispatch()

  const OnSetPokemonType = (type) => {
    dispatch(onAddPokemonType({ type }))
  }

  const OnRemovePokemonType = (type) => {
    dispatch(
      onRemovePokemonType({
        type,
      }),
    )
  }

  const fillFilter = (value) => {
    value.target.checked
      ? OnSetPokemonType(value.target.value)
      : OnRemovePokemonType(value.target.value)
  }

  useEffect(() => {}, [pokeTypes])

  return (
    <div className="grid grid-rows-4 grid-flow-col absolute left-0 py-4 mt-2 w-fit px-8 gap-x-12 gap-y-2 rounded-md shadow-lg bg-white z-40">
      {POKEMON_TYPE_COLORS.map((item) => (
        <Checkbox
          key={item.type}
          label={item.type}
          isChecked={pokeTypes.includes(item.type)}
          onChange={fillFilter}
        />
      ))}
    </div>
  )
}
