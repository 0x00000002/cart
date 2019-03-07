import React from 'react'
import App from './App'
import { mount } from 'enzyme'

const props = {
  correct: {
    location: {
      pathname: '/test-path'
    },
    gistGetAddress: jest.fn(),
    ipfsFetch: jest.fn(),
    ipfsSetup: jest.fn(),
    ipfs: {
      data: {
        address: 'fake-address',
        code: 'fake-code'
      }
    }
  },
  wrong: {
    location: '',
    gistGetAddress: jest.fn(),
    ipfsFetch: jest.fn(),
    ipfsSetup: jest.fn(),
    ipfs: {
      data: {
        address: 'fake-address',
        code: null
      }
    }
  }
}

let wrapper

describe('components/App', function () {
  it('should display Loading... on empty props', async function () {
    wrapper = mount(<App {...props.wrong} />)
    expect(wrapper.text()).toEqual('Loading gist, please wait ...')
  })

  beforeEach(() => {
    wrapper = mount(<App {...props.correct} />)
  })

  it('should call gistGetAddress', async function () {
    expect(props.correct.gistGetAddress).toBeCalled()
  })

  it('should fetch', async function () {
    expect(props.correct.gistGetAddress).toBeCalled()
    expect(props.correct.ipfsFetch).toBeCalled()
  })

  it('handleChange should set state', async function () {
    wrapper.instance().handleChange('fake-code')
    expect(wrapper.state().code).toEqual('fake-code')
  })
})
