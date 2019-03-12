import React from 'react'
import Header from './Header'
import { CartItems } from './Cart'
import { shallow } from 'enzyme'

const props = {
  data: {
    items: 3,
    handlers: {
      showCart: jest.fn()
    }
  }
}

describe('components/Header', function () {
  it('should load CartItems component', async function () {
    const wrapper = shallow(<Header {...props} />)
    expect(wrapper.find(CartItems).exists()).toEqual(true)
  })
})
