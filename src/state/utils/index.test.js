'use strict'

import * as index from './index'

describe('index', function () {
  it('should export functions', function () {
    expect(Object.keys(index)).toEqual(['createReducer', 'fetch'])
  })
})
