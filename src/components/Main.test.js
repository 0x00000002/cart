import React from 'react'
import Main, { test } from './Main'
import List from './List'
import { shallow } from 'enzyme'
import fake from '../helpers/testing'

describe('components/Header', function () {
  it('should load List component', async function () {
    const wrapper = shallow(<Main {...fake.props.correct.products.data} />)
    expect(wrapper.find(List).exists()).toEqual(true)
  })

  it('should format data properly', async function () {
    const expected = [
      {"id": 0, "name": "Coca Cola", "price": "3.00"},
      {"id": 1, "name": "Pepsi Cola", "price": "2.50"}
    ]

    expect(test(fake.props.correct.products.data.items)).toEqual(expected)
  })

})
