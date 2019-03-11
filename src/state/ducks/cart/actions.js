import * as types from './types'

const emptyCart = {
  items: [],
  qnty: 0,
  sum: 0
}

export const clearCart = () => async dispatch => {
//  saveState(emptyState)
  dispatch({
    type: types.CLEAR_CART_COMPLETED,
    payload: emptyCart
  })
}

export const cartTotal = () => async dispatch => {
  dispatch({
    type: types.CART_TOTAL_COMPLETED,
  })
}

export const fetchCart = () => dispatch => {
  dispatch({
    type: types.CART_FETCH_COMPLETED,
  })
}

export const addItem = (item) => dispatch => {
  dispatch({
    type: types.ADD_ITEM_COMPLETED,
    payload: item
  })
}

export const removeItem = (item) => dispatch => {
  dispatch({
    type: types.REMOVE_ITEM_COMPLETED,
    payload: item
  })
}
