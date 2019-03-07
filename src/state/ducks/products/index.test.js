'use strict'

import * as index from './index'

describe('cart/index.js', function () {
  it('should export functions', function () {
    expect(Object.keys(index)).toEqual(['default', 'cartOperations'])
  })
})
