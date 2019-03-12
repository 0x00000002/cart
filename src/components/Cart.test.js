import React from 'react'
import Cart, { List } from './Cart'
import { shallow } from 'enzyme'
import fake from '../helpers/testing'

describe('components/Code', function () {
  it('should .... /*?*/ /*?*//*?*/', async function () {
    const wrapper = shallow(<Cart {...fake.correct.cart.data} />)
    expect(wrapper.findWhere(<List />).exists()).toEqual(true)
    wrapper.find().simulate('change')
    expect(fake.correct.handlers.fetchCart).toBeCalled()
  })
})
