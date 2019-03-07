import React from 'react'
import Cart from './Code'
import CodeMirror from 'react-codemirror'
import { shallow } from 'enzyme'

const testProps = {
  code: 'test code',
  handler: jest.fn()
}

describe('components/Code', function () {
  it('should call handler', async function () {
    const wrapper = shallow(<Cart {...testProps} />)
    expect(wrapper.find(CodeMirror).exists()).toEqual(true)
    wrapper.find(CodeMirror).simulate('change')
    expect(testProps.handler).toBeCalled()
  })
})
