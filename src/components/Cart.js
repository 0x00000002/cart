import React, { Component } from 'react'
import List from './List'
import Checkout from './Checkout'

class Cart extends Component {
  state = {
    cart: null
  }

  async componentDidMount () {
    const userId = await getUserId()
    await this.props.fetchCart(userId)
    this.setState({ cart: this.props.cart })
  }

  render () {
    const { data } = this.props && this.props.cart
    console.log(data)
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

const getUserId = () => {
  return '001'
}

export default Cart
