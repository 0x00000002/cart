'use strict'

import * as types from './types'

describe('user.types', function () {
  it('should export types', function () {
    expect(types).toEqual({
      PRODUCTS_FETCH: 'PRODUCTS_FETCH',
      PRODUCTS_FETCH_COMPLETED: 'PRODUCTS_FETCH_COMPLETED',
      PRODUCTS_FETCH_FAILED: 'PRODUCTS_FETCH_FAILED'
    })
  })
})
