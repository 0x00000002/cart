import React, { Component } from 'react'
import List from './List'
import { CartItems } from './Cart'

class App extends Component {
  state = {
    cart: null,
    ready: false
  }

  async componentDidMount () {
    const userId = await getUserId()
    await this.props.fetchList()
    console.table(this.props.products.data)
    await this.props.cartTotal(userId)
    console.table(this.props.cart.data)

    this.setState({ ready: true })
  }

  render () {
    const { cart: { data: cartData }, products: { data: productsData } } = this.props
    return (
      <div>
        { (!cartData || !productsData) && <div>Loading, please wait...</div> }
        { cartData && productsData &&
          <div>
            <List data={productsData} />
            <CartItems items={cartData.length} />
          </div>
        }
      </div>
    )
  }
}

const getUserId = () => {
  return '001'
}

export default App
