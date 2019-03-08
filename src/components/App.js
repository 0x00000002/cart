import React, { Component } from 'react'
import Main from './Main'
import Header from './Header'
import { CartContext } from './CartContext'

export default class App extends Component {
  async componentDidMount () {
    const userId = await getUserId()
    await this.props.fetchList()
    await this.props.cartTotal(userId)
  }

  render () {
    const { cart, products } = this.props
    const hasList = !!products.data.length
    const hasCart = !!cart.data.length

    return (
      <CartContext.Provider value={cart.data} >
        { (!hasList || !hasCart) && <div>Loading, please wait...</div> }
        { hasList && hasCart &&
          <div>
            <Header data={{ cartTotal: cart.data.length }} />
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
