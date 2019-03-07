'use strict'

import createReducer from './createReducer'

describe('createReducer', function () {
  const initialState = {
    initial: 'fake'
  }
  const reducerMap = {
    'fake-action-type': jest.fn().mockReturnValue('fake-state')
  }
  const fakeState = {
    new: 'fake'
  }
  const action = {
    type: 'fake-action-type'
  }

  it('is a function', () => {
    expect(typeof createReducer).toEqual(
      'function',
      'createReducer is exported'
    )
  })

  it('uses the reducer from the supplied map', function () {
    const result = createReducer(initialState, reducerMap)(fakeState, action)

    expect(result).toEqual('fake-state')
  })

  it('should return the state if the reducer does not exist', function () {
    const result = createReducer(initialState, {})(fakeState, action)

    expect(result).toEqual(fakeState)
  })
})
