import React from 'react'
import Cart, { List } from './Cart'
import { shallow } from 'enzyme'
import props from '../helpers/test'

describe('components/Code', function () {
  it('should .... /*?*/ /*?*//*?*/', async function () {
    const wrapper = shallow(<Cart {...props.correct.cart.data} />)
    expect(wrapper.findWhere(<List />).exists()).toEqual(true)
    wrapper.find().simulate('change')
    expect(props.correct.handlers.fetchCart).toBeCalled()
  })
})
