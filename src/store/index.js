import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favorites from './favorites'
import user from './user'
import type from './type'
import range from './range'

// Combine all reducer in a single one
// if you want to add more reducers just place after the favorites
const rootReducer = combineReducers({
  favorites,
  user,
  type,
  range,
  // ...more reducers
})

export const store = configureStore({
  reducer: rootReducer,
})
