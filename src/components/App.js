import React, { Component } from 'react'
import List from './List'
import Header from './Header'

export default class App extends Component {
  async componentDidMount () {
    const userId = await getUserId()
    await this.props.fetchList()
    await this.props.cartTotal(userId)
  }

  render () {
    const { cart: { data: cartData }, products: { data: productsData } } = this.props
    return (
      <div>
        { (!cartData || !productsData) && <div>Loading, please wait...</div> }
        { cartData && productsData &&
          <div>
            <List data={productsData} />
            <Header data={{ cartTotal: cartData.length }} />
          </div>
        }
      </div>
    )
  }
}

const getUserId = () => {
  return '001'
}

