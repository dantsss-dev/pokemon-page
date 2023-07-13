import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  last_name: '',
}

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    onSetUserDetail: (state, action) => {
      state.name = action.payload.name
      state.last_name = action.payload.last_name
    },
  },
})

const userSliceSelector = (state) => state.user
export const userSelector = createSelector(userSliceSelector, (user) => ({
  name: user.name,
  last_name: user.last_name,
}))

export const { onSetUserDetail } = userSlice.actions
export default userSlice.reducer
