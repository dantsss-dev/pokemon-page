import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rangeValues: [
    { stat: 'attack', value: { from: 0, to: 0 } },
    { stat: 'experience', value: { from: 0, to: 0 } },
  ],
}

const rangeFromToSlice = createSlice({
  initialState,
  name: 'range',
  reducers: {
    onSetRangeFromTo: (state, action) => {
      const { stat, from, to } = action.payload
      const rangeValues = state.rangeValues.map((item) => {
        if (item.stat === stat) {
          return {
            ...item,
            value: {
              from,
              to,
            },
          }
        }
        return item
      })
      state.rangeValues = rangeValues
    },
  },
})

export const { onSetRangeFromTo } = rangeFromToSlice.actions
export default rangeFromToSlice.reducer
