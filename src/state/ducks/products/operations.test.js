'use strict'

import * as operations from './operations'

describe('products – operations', function () {
  it('should export functions', function () {
    expect(Object.keys(operations)).toEqual([
      'fetchProducts'
    ])
  })
})
