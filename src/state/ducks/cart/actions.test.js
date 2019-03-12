'use strict'
import fake from '../../../helpers/testing'
import * as actions from './actions'
import * as types from './types'

const emptyCart = {
  items: [],
  qnty: 0,
  sum: 0
}

describe('cart actions', function () {
  it('should export functions', function () {
    expect(Object.keys(actions)).toEqual([
      'clearCart',
      'cartTotal',
      'fetchCart',
      'addItem',
      'removeItem'
    ])
  })

  describe('clearCart', function () {
    it('should return an CLEAR_CART_COMPLETE action', function () {
      expect(actions.clearCart()).toEqual({
        type: types.CLEAR_CART_COMPLETED,
        payload: emptyCart
      })
    })

    it('should return CART_FETCH_COMPLETED action on empty address', function () {
      expect(actions.fetchCart('')).toEqual({
        type: types.CART_FETCH_COMPLETED
      })
    })
  })

  it('should return an CART_TOTAL_COMPLETED action', function () {
    expect(actions.cartTotal()).toEqual({
      type: types.CART_TOTAL_COMPLETED
    })
  })

  it('should return an ADD_ITEM_COMPLETED action', function () {
    expect(actions.addItem(fake.item)).toEqual({
      type: types.ADD_ITEM_COMPLETED,
      payload: fake.item
    })
  })

  it('should return an CART_TOTAL_COMPLETED action', function () {
    expect(actions.removeItem(fake.item)).toEqual({
      type: types.REMOVE_ITEM_COMPLETED,
      payload: fake.item
    })
  })

})
