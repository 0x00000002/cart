import React, { Component } from 'react'
import List from './List'
import Checkout from './Checkout'

export class Cart extends Component {
  state = {
    cart: null
  }

  render () {
    const { data } = this.props && this.props.cart
    // console.log(data)
    return (
      <div>
        { data && <div>Loading, please wait...</div> }
        { data && data.length &&
          <div>
            <List data={data} />
            <Checkout cart={data} />
          </div>
        }
      </div>
    )
  }
}

export const CartItems = ({ items }) => (
  <a href={'./'} className={'itemsTotal'}>
    Cart<span>{items}</span>
  </a>
)
