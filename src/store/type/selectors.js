import { createSelector } from 'reselect'

export const typeSliceSelector = (state) => state.type
export const typeFilterSelector = createSelector(typeSliceSelector, (type) => type.typeFilter)
