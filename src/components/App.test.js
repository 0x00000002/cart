import React from 'react'
import App from './App'
import Header from './Header'
import Cart from './Cart'
import { shallow } from 'enzyme'
import fake from './../helpers/testing'

let wrapper

describe('components/App', function () {
  it('should display Loading... on empty state', async function () {
    const noList = {
      ...fake.props.correct,
      products: { data: { items: [] } }
    }
    wrapper = shallow(<App {...noList} />)
    expect(wrapper.find(Header).exists()).toEqual(true)
    expect(wrapper.find('h2').text()).toEqual('Loading, please wait...')
  })

  beforeEach(() => {
    wrapper = shallow(<App {...fake.props.correct} />)
  })

  it('should call fetchList', async function () {
    expect(fake.props.correct.fetchList).toBeCalled()
  })

  it('should call fetchCart', async function () {
    expect(fake.props.correct.fetchCart).toBeCalled()
  })

  it('viewCart should load Cart component', async function () {
    expect(wrapper.find(Cart).exists()).toEqual(false)
    wrapper.instance().viewCart()
    expect(wrapper.state().viewCart).toEqual(true)
    expect(wrapper.find(Cart).exists()).toEqual(true)
  })
})
