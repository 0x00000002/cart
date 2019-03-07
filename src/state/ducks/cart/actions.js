import * as types from './types'

const products = [
  { name: 'Sledgehammer', price: 125.76 },
  { name: 'Axe', price: 190.51 },
  { name: 'Bandsaw', price: 562.14 },
  { name: 'Chisel', price: 13.9 },
  { name: 'Hacksaw', price: 19.45 }
]

export const fetchProducts = () => async dispatch => {
  dispatch({
    type: types.CART_FETCH,
    meta: {
      async: true,
      blocking: false
    }
  })

  dispatch({
    type: types.CART_FETCH_COMPLETED,
    meta: {
      async: true
    },
    payload:
      products
  })
}

export const fetchCart = (userId) => async dispatch => {
  const cart = products
  dispatch({
    type: types.CART_FETCH_COMPLETED,
    payload:
      cart
  })
}

export const itemUpdate = (item, qnty) => async dispatch => {
  dispatch({
    type: types.ITEM_UPDATE,
    meta: {
      async: true,
      blocking: false
    },
    payload: { item, qnty }
  })

  dispatch({
    type: types.ITEM_UPDATE_COMPLETED,
    payload: {
      item,
      qnty
    }
  })
}

export const itemRemove = (item) => async dispatch => {
  dispatch({
    type: types.ITEM_REMOVE,
    meta: {
      async: true,
      blocking: false
    },
    payload: { item }
  })

  dispatch({
    type: types.ITEM_REMOVE_COMPLETED,
    payload: { item }
  })
}
