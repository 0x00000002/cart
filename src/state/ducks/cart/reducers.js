import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'

export const ipfsReducer = createReducer({}, {
  [types.CART_FETCH_COMPLETED]: (state, action) => action.payload,
  [types.ITEM_UPDATE_COMPLETED]: (state, action) => action.payload,
  [types.ITEM_REMOVE_COMPLETED]: (state, action) => action.payload
})

export default combineReducers({ data: ipfsReducer })
