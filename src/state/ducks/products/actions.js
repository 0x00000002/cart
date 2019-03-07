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
    type: types.PRODUCTS_FETCH,
    meta: {
      async: true,
      blocking: false
    }
  })

  dispatch({
    type: types.PRODUCTS_FETCH_COMPLETED,
    meta: {
      async: true
    },
    payload:
      products
  })
}
