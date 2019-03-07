import React, { Component } from 'react'
import List from './List'
import Checkout from './Checkout'

class Cart extends Component {
  state = {
    cart: null,
    userId: null
  }

  async componentDidMount () {
    const userId = await getUserId()
    this.setState({ userId })
    await this.props.getCart(this.state.userId)
    this.setState({ cart: this.props.cart.data })
  }

  render () {
    return (
      <div>
        { this.state.cart &&
          <div>
            <List data={this.state.cart} />
            <Checkout cart={this.state.cart} />
          </div>
        }
      </div>
    )
  }
}

const getUserId = () => {
  return '001'
}

export default Cart
