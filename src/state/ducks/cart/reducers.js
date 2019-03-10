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
const updateTotal = price => R.map(R.over(totalLens, addPrice(price)))
const getIndex = id => find(id)
const qntyLens = R.lensProp('qnty')
const totalLens = R.lensProp('total')
const indexLens = id => R.lensIndex(id)
// const priceLens = R.lensProp('price')
// const price = R.map(R.view(priceLens))
const incQnty = R.map(R.over(qntyLens, inc))
const getChanges = item => R.compose(updateTotal(item.price), incQnty, select(item.id))
const replace = (index, newItem) => R.set(indexLens(index), newItem)

export const cartReducer = createReducer({ data: [], items: 0 }, {
  [types.CART_TOTAL_COMPLETED]: (state, action) => action.payload,
  [types.CART_FETCH_COMPLETED]: (state, action) => action.payload,
  [types.ADD_ITEM_COMPLETED]: (state, action) => addItems(state, action.payload),
  [types.ITEM_UPDATE_COMPLETED]: (state, action) => action.payload
})

export default combineReducers({ data: cartReducer })

const addItems = (state, item) => {
  const { data: cart, items: total } = state
  const changes = getChanges(item)(cart)
  const newItem = changes[0] || { ...item, qnty: 1, total: item.price }
  const index = getIndex(item.id)(cart)
  const data = index === -1 ? [...cart, newItem] : replace(index, newItem)(cart)
  const items = inc(total)
  return { data, items }
}