'use strict'

import * as index from './index'

describe('ducks.index', function () {
  it('should export functions', function () {
    expect(Object.keys(index)).toEqual(['ipfs'])
  })
})
