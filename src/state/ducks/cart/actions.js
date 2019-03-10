import * as types from './types'
import { saveState, loadState } from '../../../state/localStorage'

const emptyCart = { data: [], items: 0, sum: 0 }
const cart = loadState().cart.data

export const clearCart = () => async dispatch => {
  saveState(emptyCart)
  dispatch({
    type: types.CLEAR_CART_COMPLETED,
    payload: emptyCart
  })
}

export const cartTotal = () => async dispatch => {
  dispatch({
    type: types.CART_TOTAL_COMPLETED,
    payload:
      cart
  })
}

export const fetchCart = (userId) => async dispatch => {
  dispatch({
    type: types.CART_FETCH,
    meta: {
      async: true,
      blocking: true
    }
  })

  dispatch({
    type: types.CART_FETCH_COMPLETED,
    meta: {
      async: true,
      blocking: false
    },
    payload: cart
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
