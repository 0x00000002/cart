import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'

const R = require('ramda')

const hasId = id => R.propEq('id', id)
const select = id => R.filter(hasId(id))
const find = id => R.findIndex(hasId(id))
const toFixed = number => number.toFixed(2)
const inc = n => n + 1
const sum = (a, b) => parseFloat(a) + parseFloat(b)
const addPrice = price => total => toFixed(sum(price, total))
const plusTotal = price => R.map(R.over(totalLens, addPrice(price)))
const getIndex = id => find(id)
const qntyLens = R.lensProp('qnty')
const totalLens = R.lensProp('total')
const indexLens = id => R.lensIndex(id)
const incQnty = R.map(R.over(qntyLens, inc))
const increment = item => R.compose(plusTotal(item.price), incQnty, select(item.id))
const replace = (index, newItem) => R.set(indexLens(index), newItem)
const remove = index => R.remove(index, 1)

export const cartReducer = createReducer({ data: [], items: 0 }, {
  [types.CLEAR_CART_COMPLETED]: (state, action) => action.payload,
  [types.CART_TOTAL_COMPLETED]: (state, action) => action.payload,
  [types.CART_FETCH_COMPLETED]: (state, action) => action.payload,
  [types.ADD_ITEM_COMPLETED]: (state, action) => addItem(state, action.payload),
  [types.REMOVE_ITEM_COMPLETED]: (state, action) => removeItem(state, action.payload)
})

export default combineReducers({ data: cartReducer })

const addItem = (state, item) => {
  const { data: cart, items: total } = state
  const changes = increment(item)(cart)
  const newItem = changes[0] || { ...item, qnty: 1, total: item.price }
  const index = getIndex(item.id)(cart)
  const data = index === -1 ? [...cart, newItem] : replace(index, newItem)(cart)
  const items = inc(total)
  return { data, items }
}

const removeItem = (state, item) => {
  const { data: cart, items: total } = state
  const index = getIndex(item.id)(cart)
  const items = total - cart[index].qnty
  const data = index === -1 ? [...cart] : remove(index)(cart)
  return { data, items }
}
