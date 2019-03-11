// 'use strict'
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import * as actions from './actions'
// import * as types from './types'
// import props from './../../../helpers/test'
// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)
//
// describe('cart.actions', function () {
//   it('should export functions', function () {
//     expect(Object.keys(actions)).toEqual([
//       'fetchProducts'
//     ])
//   })
//
//   describe('fetchProducts', function () {
//     it.only('should return an PRODUCTS_FETCH action', function () {
//       expect(actions.fetchProducts()).toEqual({
//         type: types.PRODUCTS_FETCH,
//         meta: {
//           async: true,
//           blocking: false
//         }
//       })
//     })
//
//     it('should return IPFS_FETCH_COMPLETE action on empty address', function () {
//       expect(actions.ipfsFetch('')).toEqual({
//         type: types.IPFS_FETCH_COMPLETED
//       })
//     })
//   })
//
//   describe('ipfsSetup', function () {
//     it('should return an IPFS_SETUP action', function () {
//       expect(actions.ipfsSetup()).toEqual({
//         type: types.IPFS_SETUP,
//         meta: {
//           async: true,
//           blocking: true,
//           path: '/api/v0/version',
//           method: 'GET'
//         }
//       })
//     })
//   })
//
//   describe('ipfsUpdate', function () {
//     it('should return an IPFS_UPDATE action', function () {
//       const store = mockStore({ code: 'fake-code', address: 'fake-address' })
//       const expectedAction = [{
//         type: types.IPFS_UPDATE_COMPLETED,
//         payload: {
//           address: 'zb2rhkeCWu5N5z2qP4JtYeeZ9qrSzfghWq96LcUCLPtJHEcRN',
//           code: 'fake-code'
//         }
//       }]
//       store.dispatch(actions.ipfsUpdate('fake-code'))
//         .then(() =>
//           expect(store.getActions().resolve()).toEqual(expectedAction)
//         )
//     })
//   })
//
//   describe('gistGetAddress', function () {
//     it('should parse path correctly', function () {
//       expect(actions.gistAddress('/fake-path')).toEqual('fake-path')
//     })
//
//     it('should return address', function () {
//       const store = mockStore({ code: 'fake-code' })
//       const expectedAction = {
//         type: types.IPFS_GETADDRESS_COMPLETED,
//         payload: {
//           address: 'fake-address'
//         }
//       }
//       store.dispatch(actions.gistGetAddress('/fake-address'))
//         .then(() =>
//           expect(store.getActions()).toEqual(expectedAction)
//         )
//     })
//   })
// })
