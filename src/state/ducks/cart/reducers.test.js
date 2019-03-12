'use strict'

import { combineReducers } from 'redux'
import { createReducer } from '../../utils'
import reducer, { cartReducer } from './reducers'
import fake from '../../../helpers/testing'

jest.mock('redux', () => ({
  combineReducers: jest
    .fn()
    .mockReturnValue({ reducer: 'fake-combined-reducer' })
}))
jest.mock('../../utils', () => ({
  createReducer: jest.fn().mockReturnValue('fake-reducer')
}))

describe('ipfs.reducers', function () {
  describe('ipfsReducer', function () {
    it('should call createReducer with correct args', function () {
      expect(cartReducer).toEqual('fake-reducer')
      expect(createReducer.mock.calls[0][0]).toEqual({})
      expect(Object.keys(createReducer.mock.calls[0][1])).toEqual([
        'CLEAR_CART_COMPLETED',
        'CART_TOTAL_COMPLETED',
        'CART_FETCH_COMPLETED',
        'ADD_ITEM_COMPLETED',
        'REMOVE_ITEM_COMPLETED'
      ])
    })

    it('should support CLEAR_CART_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['CLEAR_CART_COMPLETED']({}, {
          payload: fake.payload
        })
      ).toEqual('fake-payload')
    })

    it('should support CART_TOTAL_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['CART_TOTAL_COMPLETED'](
          { state: fake.state },
          { payload: fake.payload }
        )
      ).toEqual({ state: fake.state })
    })

    it('should support CART_FETCH_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['CART_FETCH_COMPLETED'](
          { state: fake.state },
          { payload: fake.payload }
        )
      ).toEqual({ state: fake.state })
    })

    it('should support ADD_ITEM_COMPLETED', function () {
      const expectedCart = {
        items: [
          { id: 0, name: 'Coca Cola', price: "3.00", qnty: 2, total: "6.00" },
          { id: 1, name: 'Pepsi Cola', price: "2.50", qnty: 2, total: "5.00" }
        ],
        qnty: 4,
        sum: '11.00'
      }

      expect(
        createReducer.mock.calls[0][1]['ADD_ITEM_COMPLETED'](
          { ...fake.props.correct.cart.data },
          { payload: fake.item }
        )
      ).toEqual(expectedCart)
    })
  })

  describe('reducer', function () {
    expect(combineReducers.mock.calls[0][0]).toEqual({ data: 'fake-reducer' })
    expect(reducer).toEqual({ reducer: 'fake-combined-reducer' })
  })
})
