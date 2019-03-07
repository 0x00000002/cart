'use strict'

import { combineReducers } from 'redux'
import { createReducer } from '../../utils'
import reducer, { ipfsReducer } from './reducers'

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
      expect(ipfsReducer).toEqual('fake-reducer')
      expect(createReducer.mock.calls[0][0]).toEqual({})
      expect(Object.keys(createReducer.mock.calls[0][1])).toEqual([
        'IPFS_FETCH_COMPLETED',
        'IPFS_SETUP_COMPLETED',
        'IPFS_UPDATE_COMPLETED',
        'IPFS_GETADDRESS_COMPLETED'
      ])
    })

    it('should support IPFS_FETCH_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['IPFS_FETCH_COMPLETED']({}, {
          payload: 'fake-payload'
        })
      ).toEqual({ address: 'new', code: 'fake-payload' })
    })
    it('should support IPFS_SETUP_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['IPFS_SETUP_COMPLETED']({}, {
          payload: 'fake-payload'
        })
      ).toEqual('fake-payload')
    })
    it('should support IPFS_UPDATE_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['IPFS_UPDATE_COMPLETED']({}, {
          payload: 'fake-payload'
        })
      ).toEqual('fake-payload')
    })
    it('should support IPFS_GETADDRESS_COMPLETED', function () {
      expect(
        createReducer.mock.calls[0][1]['IPFS_GETADDRESS_COMPLETED']({}, {
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
