import { createSlice } from '@reduxjs/toolkit'

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
  },
})

export const { onAddPokemonToFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
