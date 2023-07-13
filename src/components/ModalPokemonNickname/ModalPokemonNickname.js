import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { favoritesPokemonSelector } from '@/store/favorites'
import { onAddPokemonToFavorites } from '@/store/favorites'
import { hasValidateNickname } from '@/utils/validations/validations'

export default function ModalPokemonNickname({ name, id, closeModal }) {
  const [nickname, setNickname] = useState('')
  const dispatch = useDispatch()
  const favPokemon = useSelector(favoritesPokemonSelector)

  const onSetFavoritePokemon = () => {
    if (hasValidateNickname(nickname, favPokemon)) {
      dispatch(
        onAddPokemonToFavorites({
          id,
          name,
          nickname,
        }),
      )
      closeModal()
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-25">
      <div className="bg-white w-auto p-6 mx-4 rounded-lg flex flex-wrap justify-between">
        <div className="w-full mb-4">
          <label className="block text-gray-700 text-md font-bold mb-4 text-center">
            Put a nickname to your pokemon
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Nickname"
            onChange={(event) => setNickname(event.target.value)}
          />
        </div>
        <button
          onClick={onSetFavoritePokemon}
          className="w-full md:w-auto mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to favorite
        </button>
        <button
          onClick={() => closeModal()}
          className="w-full md:w-auto mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
