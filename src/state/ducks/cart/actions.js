import * as types from './types'

const emptyCart = {
  items: [],
  qnty: 0,
  sum: 0
}

export const clearCart = () => ({
  type: types.CLEAR_CART_COMPLETED,
  payload: emptyCart
})

export const cartTotal = () => ({
  type: types.CART_TOTAL_COMPLETED
})

export const fetchCart = () => ({
  type: types.CART_FETCH_COMPLETED
})

export const addItem = (item) => ({
  type: types.ADD_ITEM_COMPLETED,
  payload: item
})

export const removeItem = (item) => ({
  type: types.REMOVE_ITEM_COMPLETED,
  payload: item
})
