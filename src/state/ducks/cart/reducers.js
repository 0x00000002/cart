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

export const cartReducer = createReducer({ data: [], items: 0 }, {
  [types.CLEAR_CART_COMPLETED]: (state, action) => action.payload,
  [types.CART_TOTAL_COMPLETED]: (state, action) => action.payload,
  [types.CART_FETCH_COMPLETED]: (state, action) => action.payload,
  [types.ADD_ITEM_COMPLETED]: (state, action) => addItem(state, action.payload),
  [types.REMOVE_ITEM_COMPLETED]: (state, action) => removeItem(state, action.payload)
})

export default combineReducers({ data: cartReducer })

const addItem = (state, item) => {
  const { data: cart, items: qnty, sum: total } = state
  const changes = increment(item)(cart)
  const newItem = changes[0] || { ...item, qnty: 1, total: item.price }
  const index = getIndex(item.id)(cart)
  const data = index === -1 ? [...cart, newItem] : replace(index, newItem)(cart)
  const items = inc(qnty)
  const sum = addPrice(total)(item.price)
  return { data, items, sum }
}

const removeItem = (state, item) => {
  const { data: cart, items: qnty, sum: total } = state
  const index = getIndex(item.id)(cart)
  const items = qnty - cart[index].qnty
  const data = index === -1 ? [...cart] : remove(index)(cart)
  const sum = decreaseSum(item, total)
  return { data, items, sum }
}
