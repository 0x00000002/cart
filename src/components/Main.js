import React from 'react'
import List from './List'

const R = require('ramda')

const onPrice = R.lensProp('price')
const select = R.map(R.pick(['name', 'price']))
const toFixed = number => number.toFixed(2)
const formatPrice = R.map(R.over(onPrice, toFixed))
const mapIndexed = R.addIndex(R.map)
const addId = mapIndexed((val, id) => ({ id, ...val })) // we should have product ID, eh? :-)
const format = R.compose(addId, formatPrice, select)

const Main = ({ items }) => {
  return (
    <div>
      <List items={format(items)} />
      { /* some other components */ }
    </div>
  )
}

export default Main
export const test = format // for testing `format` function
