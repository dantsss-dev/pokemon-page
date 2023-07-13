import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { onAddPokemonToFavorites } from '@/store/favorites'

export default function ModalPokemonNickname({ name, id, closeModal }) {
  const [nickname, setNickname] = useState('')
  const dispatch = useDispatch()

  const onSetFavoritePokemon = () => {
    dispatch(
      onAddPokemonToFavorites({
        id,
        name,
        nickname,
      }),
    )
    closeModal()
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-25">
      <div className="bg-white w-auto p-6 mx-4 rounded-lg flex flex-wrap justify-center lg:justify-end">
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
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to favorite
        </button>
      </div>
    </div>
  )
}
