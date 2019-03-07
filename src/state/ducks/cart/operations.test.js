'use strict'

import * as operations from './operations'

describe('ipfs.operations', function () {
  it('should export functions', function () {
    expect(Object.keys(operations)).toEqual([
      'ipfsFetch',
      'ipfsSetup',
      'ipfsUpdate',
      'gistGetAddress'
    ])
  })
})
