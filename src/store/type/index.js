import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  typeFilter: [],
}

const typeSlice = createSlice({
  initialState,
  name: 'type',
  reducers: {
    onAddPokemonType: (state, action) => {
      state.typeFilter = [...state.typeFilter, action.payload.type]
    },
    onRemovePokemonType: (state, action) => {
      state.typeFilter = state.typeFilter.filter((pokemon) => pokemon !== action.payload.type)
    },
  },
})

export const { onAddPokemonType, onRemovePokemonType } = typeSlice.actions
export default typeSlice.reducer
