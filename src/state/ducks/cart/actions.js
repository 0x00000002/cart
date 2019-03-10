import * as types from './types'

const cart = { data: [], items: 0 }

export const cartTotal = () => async dispatch => {
  dispatch({
    type: types.CART_TOTAL_COMPLETED,
    payload:
      cart
  })
}

// should be fetched from DB by user's cookie
export const fetchCart = (userId) => async dispatch => {
  dispatch({
    type: types.CART_FETCH,
    meta: {
      async: true,
      blocking: false
    }
  })

  dispatch({
    type: types.CART_FETCH_COMPLETED,
    payload: cart
  })
}

export const itemUpdate = (item, qnty) => async dispatch => {
  dispatch({
    type: types.ITEM_UPDATE_COMPLETED,
    payload: {
      item,
      qnty
    }
  })
}

export const addItem = (item) => dispatch => {
  dispatch({
    type: types.ADD_ITEM_COMPLETED,
    payload: item
  })
}
