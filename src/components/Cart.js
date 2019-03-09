import React, { Component } from 'react'
import List from './List'
import Checkout from './Checkout'
import ShoppingCart from '@material-ui/icons/ShoppingCart'

export class Cart extends Component {
  state = {
    cart: null
  }

  render () {
    const { state, dispatch } = this.props && this.props.cart

    return (
      <div>
        { !state && <div>Loading, please wait...</div> }
        { state && state.length &&
          <div>
            <List data={state} />
            <Checkout cart={state} />
          </div>
        }
      </div>
    )
  }
}

export const CartItems = ({ items }) => (
  <div className={'itemsTotal'}>
    <span><ShoppingCart style={{ fontSize: 16 }} /></span>
    <span>{items}</span>
  </div>
)
