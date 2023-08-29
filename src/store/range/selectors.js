import { createSelector } from '@reduxjs/toolkit'
const rangeFromToSliceSelector = (state) => state.range
export const rangeFromToSelector = createSelector(
  rangeFromToSliceSelector,
  (range) => range.rangeValues,
)
