import * as types from './types'
const R = require('ramda')
const IPFS = require('nano-ipfs-store')

// we need the second element, because:
// element 0 is empty after split ('/URI')
const getFirstSegment = R.compose(R.nth(1), R.split('/'))
export const gistAddress = path => getFirstSegment(path)

export const ipfsFetch = (address) => {
  if (!address) {
    return {
      type: `${types.IPFS_FETCH}_COMPLETED`
    }
  }
  return {
    type: types.IPFS_FETCH,
    meta: {
      async: true,
      blocking: true,
      path: `/api/v0/cat?arg=${address}`,
      method: 'GET'
    }
  }
}

export const ipfsSetup = () => ({
  type: types.IPFS_SETUP,
  meta: {
    async: true,
    blocking: true,
    path: '/api/v0/version',
    method: 'GET'
  }
})

export const ipfsUpdate = (code) => async dispatch => {
  const ipfs = IPFS.at('https://ipfs.infura.io:5001')
  const address = await ipfs.add(code)

  dispatch({
    type: types.IPFS_UPDATE_COMPLETED,
    payload: {
      address,
      code
    }
  })
}

export const gistGetAddress = (path) => async dispatch => {
  const address = gistAddress(path)

  dispatch({
    type: types.IPFS_GETADDRESS_COMPLETED,
    payload: { address }
  })
}
