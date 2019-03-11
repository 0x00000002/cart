import { combineReducers } from 'redux'
import * as types from './types'
import { createReducer } from '../../utils'

const R = require('ramda')

const hasId = id => R.propEq('id', id)
const select = id => R.filter(hasId(id))
const find = id => R.findIndex(hasId(id))
const toFixed = number => number.toFixed(2)
const inc = n => n + 1
const add = (a, b) => parseFloat(a) + parseFloat(b)
const addPrice = price => total => toFixed(add(price, total))
const plusTotal = price => R.map(R.over(totalLens, addPrice(price)))
const getIndex = id => find(id)
const qntyLens = R.lensProp('qnty')
const totalLens = R.lensProp('total')
const indexLens = id => R.lensIndex(id)
const incQnty = R.map(R.over(qntyLens, inc))
const increment = item => R.compose(plusTotal(item.price), incQnty, select(item.id))
const replace = (index, newItem) => R.set(indexLens(index), newItem)
const remove = index => R.remove(index, 1)
const decreaseSum = (item, total) => addPrice(-item.price * item.qnty)(total)

export const cartReducer = createReducer({}, {
  [types.CLEAR_CART_COMPLETED]: (state, action) => action.payload,
  [types.CART_TOTAL_COMPLETED]: (state, action) => state,
  [types.CART_FETCH_COMPLETED]: (state, action) => state,
  [types.ADD_ITEM_COMPLETED]: (state, action) => addItem(state, action.payload),
  [types.REMOVE_ITEM_COMPLETED]: (state, action) => removeItem(state, action.payload)
})

const addItem = (state, item) => {
  const { items: cart, qnty: quantity, sum: total } = state
  const changes = increment(item)(cart)
  const newItem = changes[0] || { ...item, qnty: 1, total: item.price }
  const index = getIndex(item.id)(cart)
  const items = index === -1 ? [...cart, newItem] : replace(index, newItem)(cart)
  const qnty = inc(quantity)
  const sum = addPrice(total)(item.price)
  return { items, qnty, sum }
}

const removeItem = (state, item) => {
  const { items: cart, qnty: quantity, sum: total } = state
  const index = getIndex(item.id)(cart)
  const qnty = quantity - cart[index].qnty
  const items = index === -1 ? [...cart] : remove(index)(cart)
  const sum = decreaseSum(item, total)
  return { items, qnty, sum }
}

export default combineReducers({ data: cartReducer })
