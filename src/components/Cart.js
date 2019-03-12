import React from 'react'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Buttons, { BackToCatalog } from './Buttons'
import { CartContext } from './CartContext'

const Cart = ({ cart }) => {
  const empty = cart && !cart.qnty

  return (
    <div>
      { !cart && <h2>Loading, please wait...</h2> }
      { cart && empty && <EmptyCart /> }
      { cart && !empty &&
        <div>
          <h2>Cart</h2>
          <List />
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

export const List = () => {
  const { cartData: { items }, handlers } = React.useContext(CartContext)

  return (
    <section className={'cartList'}>
      { items.map(item =>
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
      <br /><hr />
      <Total />
    </section>
  )
}

const Total = () => {
  const { cartData: { qnty, sum } } = React.useContext(CartContext)

  return (
    <div>
      <span><h3>Total:</h3></span>
      <span>&nbsp;</span>
      <span><h3>{qnty}</h3></span>
      <span>&nbsp;</span>
      <span><h3>{sum}</h3></span>
    </div>
  )
}

export const EmptyCart = () => (
  <div>
    <h2>Cart is empty</h2>
    <p>Add some products to your cart! </p>
    <div className={'backOnly'}>
      <BackToCatalog />
    </div>
  </div>
)

export default Cart
