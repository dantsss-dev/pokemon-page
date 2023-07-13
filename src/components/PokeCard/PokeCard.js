import Link from 'next/link'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onRemovePokemonFromFavorites } from '@/store/favorites'
import { favoritesPokemonSelector } from '@/store/favorites'
import ModalPokemonNickname from '../ModalPokemonNickname/ModalPokemonNickname'

export const PokeCard = ({ name, index, showNickname }) => {
  const [isAddToFavorite, setIsAddToFavorite] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const favPokemon = useSelector(favoritesPokemonSelector)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleFavoritePokemon = () => {
    const value = favPokemon.find((element) => element.id === index)
    value && setIsAddToFavorite(value.nickname)
  }

  const onRemoveFavoritePokemon = () => {
    dispatch(
      onRemovePokemonFromFavorites({
        id: index,
      }),
    )
  }

  useEffect(() => {
    handleFavoritePokemon()
  }, [favPokemon])

  return (
    <div className="w-full sm:w-1/3 p-2">
      <div className="max-w-sm mx-auto h-full rounded shadow-lg text-gray-700 text-center bg-gray-100 px-4">
        {showNickname && (
          <div className="flex text-center justify-center text-2xl font-semibold capitalize py-6">
            {isAddToFavorite}
          </div>
        )}

        <div className="flex pt-4">
          <div className="w-1/2 rounded-l-lg border border-gray-700 bg-white">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt="Pokemon"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className="w-1/2 -ml-1 rounded-r-lg border border-gray-700 bg-white">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                index + 1
              }.png`}
              alt="Pokemon back"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center text-center justify-center px-1 py-4">
          {isAddToFavorite ? (
            <button
              className="w-full py-3 lg:w-auto lg:px-4 lg:py-3 border border-gray-700 rounded-md transition duration-500 ease-out hover:bg-gray-700 hover:border-transparent"
              onClick={onRemoveFavoritePokemon}
            >
              <Image
                src={require('../../assets/png/star-filled.png')}
                alt="star"
                width={24}
                height={24}
              />
            </button>
          ) : (
            <button
              className="w-full py-3 lg:w-auto lg:px-4 lg:py-3 border border-gray-700 rounded-md transition duration-500 ease-out hover:bg-gray-700 hover:border-transparent"
              onClick={openModal}
            >
              <Image
                src={require('../../assets/png/star-outline.png')}
                alt="star"
                width={24}
                height={24}
              />
            </button>
          )}
          <div className="w-full lg:w-2/4 font-bold capitalize py-2">
            {`${name} - #${String(index + 1).padStart(3, 0)}`}
          </div>
          <Link
            className="w-full lg:w-1/4 items-center transition duration-500 ease-out bg-transparent hover:bg-gray-700 text-gray-700 font-semibold hover:text-white container mx-auto py-2 border border-gray-700 hover:border-transparent rounded "
            href={{
              pathname: '/pokemon-detail/[slug]',
              query: { slug: name },
            }}
          >
            More Details
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <ModalPokemonNickname key={index} name={name} id={index} closeModal={closeModal} />
      )}
    </div>
  )
}
