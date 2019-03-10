import React, { Component } from 'react'
import Main from './Main'
import Header from './Header'
import { CartContext } from './CartContext'

export default class App extends Component {
  async componentDidMount () {
    const userId = await getUserId()
    await this.props.fetchList()
    await this.props.fetchCart(userId)
  }

  render () {
    const { cart, products } = this.props
    const hasList = !!products.data.length
    const state = cart.data
    const dispatch = {
      cartTotal: this.props.cartTotal,
      fetchCart: this.props.fetchCart,
      addItem: this.props.addItem,
      itemUpdate: this.props.itemUpdate
    }

    return (
      <CartContext.Provider value={{ state, dispatch }} >
        { !hasList && <div>Loading, please wait...</div> }
        { hasList &&
          <div>
            <Header data={{ items: cart.data.items }} />
            <Main data={products.data} />
          </div>
        }
      </CartContext.Provider>
    )
  }
}

const getUserId = () => {
  return '001'
}
