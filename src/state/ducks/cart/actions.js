import * as types from './types'

const cart = [
  { name: 'Sledgehammer', qnty: 2, price: 125.76, total: 251.52 },
  { name: 'Axe', qnty: 1, price: 190.51, total: 190.51 }
]

export const cartTotal = () => async dispatch => {
  dispatch({
    type: types.CART_TOTAL,
    meta: {
      async: true,
      blocking: false
    }
  })

  dispatch({
    type: types.CART_TOTAL_COMPLETED,
    meta: {
      async: true
    },
    payload:
      cart
  })
}

export const fetchCart = (userId) => async dispatch => {
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
