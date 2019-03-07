'use strict'

import * as index from './index'

describe('user.index', function () {
  it('should export functions', function () {
    expect(Object.keys(index)).toEqual(['default', 'ipfsOperations'])
  })
})
