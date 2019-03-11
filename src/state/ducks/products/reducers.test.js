'use strict'

import { combineReducers } from 'redux'
import { createReducer } from '../../utils'
import reducer, { productsReducer } from './reducers'

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
      expect(productsReducer).toEqual('fake-reducer')
      expect(createReducer.mock.calls[0][0]).toEqual({})
      expect(Object.keys(createReducer.mock.calls[0][1])).toEqual([
        'PRODUCTS_FETCH_COMPLETED'
      ])
    })

    it('should support IPFS_FETCH_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['PRODUCTS_FETCH_COMPLETED']({}, {
          payload: 'fake-payload'
        })
      ).toEqual('fake-payload')
    })
  })

  describe('reducer', function () {
    expect(combineReducers.mock.calls[0][0]).toEqual({ data: 'fake-reducer' })
    expect(reducer).toEqual({ reducer: 'fake-combined-reducer' })
  })
})
