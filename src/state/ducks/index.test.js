'use strict'

import * as index from './index'

describe('ducks.index', function () {
  it('should export states', function () {
    expect(Object.keys(index)).toEqual(['cart', 'products'])
  })
})
