import { createSelector } from '@reduxjs/toolkit'
const userSliceSelector = (state) => state.user
export const userSelector = createSelector(userSliceSelector, (user) => ({
  name: user.name,
  last_name: user.last_name,
}))
