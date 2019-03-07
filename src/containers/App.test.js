'use strict'

import { connect } from 'react-redux'
import App, { mapStateToProps, mapDispatchToProps } from './App'

jest.mock('react-redux', () => ({
  connect: jest
    .fn()
    .mockReturnValue(jest.fn().mockReturnValue({ component: 'fake-component' }))
}))

describe('containers.Dashboard', function () {
  describe('mapStateToProps', function () {
    it('should return a remapped state', function () {
      expect(
        mapStateToProps({ ipfs: 'fake-ipfs' })
      ).toEqual({ ipfs: 'fake-ipfs' })
    })
  })

  describe('mapDispatchToProps', function () {
    it('should return a remapped dispatches', function () {
      expect(Object.keys(mapDispatchToProps)).toEqual([
        'gistGetAddress',
        'ipfsFetch',
        'ipfsUpdate',
        'ipfsSetup'
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
