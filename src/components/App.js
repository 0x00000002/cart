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

  render () {
    const { cart, products } = this.props
    const hasList = !!products.data.length
    const state = cart.data
    const viewCart = () => this.setState({ viewCart: !this.state.viewCart })
    const handlers = {
      cartTotal: this.props.cartTotal,
      clearCart: this.props.clearCart,
      fetchCart: this.props.fetchCart,
      addItem: this.props.addItem,
      removeItem: this.props.removeItem,
      showCart: viewCart
    }

    return (
      <CartContext.Provider value={{ state, handlers }} >
        <Header data={{ items: cart.data.items }} />
        <main>
          { !hasList && <h2>Loading, please wait...</h2> }
          { hasList && !this.state.viewCart && <Main data={products.data} /> }
          { hasList && this.state.viewCart && <Cart cart={state} /> }
        </main>
      </CartContext.Provider>
    )
  }
}

const getUserId = () => {
  return '001'
}
