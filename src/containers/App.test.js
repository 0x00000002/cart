'use strict'

import { connect } from 'react-redux'
import App, { mapStateToProps, mapDispatchToProps } from './App'

jest.mock('react-redux', () => ({
  connect: jest
    .fn()
    .mockReturnValue(jest.fn().mockReturnValue({
      component: 'fake-component',
    }))
}))

describe('containers/App', function () {
  describe('mapStateToProps', function () {
    it('should return a remapped state', function () {
      expect(mapStateToProps({ cart: 'cart test', products: 'products test' })
      ).toEqual({ cart: 'cart test', products: 'products test' })
    })
  })

  describe('mapDispatchToProps', function () {
    it('should return a remapped dispatches', function () {
      expect(Object.keys(mapDispatchToProps)).toEqual([
        'fetchList',
        'fetchCart',
        'cartTotal',
        'removeItem',
        'addItem',
        'clearCart'
      ])
    })
  })

  describe('App', function () {
    it('should return a connected component', function () {
      expect(connect.mock.calls[0]).toEqual([
        mapStateToProps,
        mapDispatchToProps
      ])
      expect(App).toEqual({ component: 'fake-component' })
    })
  })
})
