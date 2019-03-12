import React from 'react'
import List from './List'
import { shallow } from 'enzyme'
import { AddShoppingCart } from '@material-ui/icons'

const products = {
  items: [
    { 'id': 0, 'name': 'Coca Cola', 'price': '3.00' },
    { 'id': 1, 'name': 'Pepsi Cola', 'price': '2.50' }
  ]
}

describe('components/Header', function () {
  it('should load AddShoppingCart component', async function () {
    const wrapper = shallow(<List {...products} />)
    expect(wrapper.find(AddShoppingCart).exists()).toEqual(true)
    expect(wrapper.find('h2').text()).toEqual('Products')
    expect(wrapper.find('button').first().text()).toEqual('<pure(AddShoppingCartIcon) />')
  })
})
