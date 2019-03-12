import React from 'react'
import Cart, { EmptyCart } from './Cart'
import { shallow } from 'enzyme'
import fake from './../helpers/testing'

const noCart = {
  ...fake.props.correct,
  cart: undefined
}
const emptyCart = {
  ...fake.props.correct,
  cart: {
    items: [],
    qnty: 0,
    sum: 0
  }
}
const cart = {
  cart: {
    items: [
      { id: 0, name: 'Coca Cola', price: '3.00', qnty: 1, total: '3.00' },
      { id: 1, name: 'Pepsi Cola', price: '2.50', qnty: 2, total: '5.00' }
    ],
    qnty: 3,
    sum: '8.00',
  }
}

describe('components/Cart', function () {
  it('should display Loading... on empty state', async function () {
    const wrapper = shallow(<Cart {...noCart} />)
    console.log(wrapper.debug())
    expect(wrapper.find('h2').text()).toEqual('Loading, please wait...')
  })

  it('should load <EmptyCart /> on empty cart', async function () {
    const wrapper = shallow(<Cart {...emptyCart} />)
    expect(wrapper.find(EmptyCart).exists()).toEqual(true)
  })

  it('viewCart should load Cart component', async function () {
    const wrapper = shallow(<Cart {...cart} />)
    console.log(wrapper.debug())
    expect(wrapper.find('h2').text()).toEqual('Cart')
  })
})
