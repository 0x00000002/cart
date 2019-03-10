import React from 'react'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Buttons, { BackToCatalog } from './Buttons'
import { CartContext } from './CartContext'

const Cart = ({ cart }) => {
  const empty = !cart.items
  const { handlers } = React.useContext(CartContext)

  return (
    <div>
      { !cart && <div>Loading, please wait...</div> }
      { cart && empty && <EmptyCart handler={handlers.showCart} /> }
      { !empty &&
        <div>
          <h2>Cart</h2>
          <List data={cart.data} />
          <Buttons />
        </div>
      }
    </div>
  )
}

export const CartItems = ({ items }) => (
  <div className={'itemsTotal'}>
    <span><ShoppingCart style={{ fontSize: 16 }} /></span>
    <span>{items}</span>
  </div>
)

const List = ({ data }) => {
  const { handlers } = React.useContext(CartContext)

  return (
    <section className={'cartList'}>
      { data.map(item =>
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span>{item.qnty}</span>
          <span>
            <button onClick={(e) => handlers.removeItem(item)}>remove</button>
          </span>
          <span>{item.total}</span>
        </div>
      )}
    </section>
  )
}

const EmptyCart = (handler) => (
  <div>
    <h2>Cart is empty</h2>
    <p>Add some products to your cart! </p>
    <div className={'handlers'}>
      <BackToCatalog />
    </div>
  </div>
)

export default Cart
