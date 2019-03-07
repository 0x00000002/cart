import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'

export const productsReducer = createReducer({}, {
  [types.PRODUCTS_FETCH_COMPLETED]: (state, action) => action.payload
})

export default combineReducers({ data: productsReducer })
