import { createSlice } from '@reduxjs/toolkit'

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

export const { onSetUserDetail } = userSlice.actions
export default userSlice.reducer
