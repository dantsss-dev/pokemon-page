import { createSelector } from 'reselect'

export const favoritesSliceSelector = (state) => state.favorites
export const favoritesPokemonSelector = createSelector(
  favoritesSliceSelector,
  (favorites) => favorites.favoritesPokemon,
)
