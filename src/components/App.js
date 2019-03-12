import React, { Component } from 'react'
import Main from './Main'
import Header from './Header'
import Cart from './Cart'
import { CartContext } from './CartContext'

export default class App extends Component {
  state = {
    viewCart: false
  }

  async componentDidMount () {
    const userId = await getUserId()
    await this.props.fetchList()
    await this.props.fetchCart(userId)
  }

  viewCart = () => this.setState({ viewCart: !this.state.viewCart })

  render () {
    const { cart: { data: cartData }, products: { data: productData } } = this.props
    const productList = cartData && productData.items

    const handlers = {
      cartTotal: this.props.cartTotal,
      clearCart: this.props.clearCart,
      fetchCart: this.props.fetchCart,
      addItem: this.props.addItem,
      removeItem: this.props.removeItem,
      showCart: this.viewCart
    }

    return (
      <CartContext.Provider value={{ cartData, handlers }} >
        <Header data={{ items: cartData.qnty, handlers }} />
        <main>
          { !productList.length && <h2>Loading, please wait...</h2> }
          { productList.length && !this.state.viewCart && <Main items={productData.items} /> }
          { productList.length && this.state.viewCart && <Cart cart={cartData} /> }
        </main>
      </CartContext.Provider>
    )
  }
}

const getUserId = () => {
  return '001'
}
