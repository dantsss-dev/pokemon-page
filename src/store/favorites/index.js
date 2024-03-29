import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
  favoritesPokemon: [],
}

const favoritesSlice = createSlice({
  initialState,
  name: 'favorites',
  reducers: {
    onAddPokemonToFavorites: (state, action) => {
      state.favoritesPokemon = [...state.favoritesPokemon, action.payload]
    },
    onRemovePokemonFromFavorites: (state, action) => {
      state.favoritesPokemon = state.favoritesPokemon.filter(
        (pokemon) => pokemon.id !== action.payload.id,
      )
    },
  },
})

export const { onAddPokemonToFavorites, onRemovePokemonFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
