'use strict'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import * as types from './types'
import fake from '../../../helpers/testing'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('cart.actions', function () {
  it('should export functions', function () {
    expect(Object.keys(actions)).toEqual([
      'fetchProducts'
    ])
  })

  describe('fetchProducts', function () {
    it('should return an PRODUCTS_FETCH action', function () {
      const store = mockStore(fake.props.correct.cart)
      const expectedAction = [{
        type: types.PRODUCTS_FETCH_COMPLETED,
        meta: {
          async: true
        }
      }]

      store.dispatch(actions.fetchProducts('fake'))
        .then(() =>
          expect(store.getActions().resolve()).toEqual(expectedAction)
        )
    })
  })
})
