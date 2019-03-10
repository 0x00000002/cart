import React from 'react'
import { CartContext } from './CartContext'

export const Buttons = () => (
  <div className={'handlers'}>
    <div>
      <ClearAll />
    </div>
    <div>
      <BackToCatalog />
      <CheckOut />
    </div>
  </div>
)

export const BackToCatalog = () => {
  const { handlers } = React.useContext(CartContext)
  return (
    <button className={'handler backToCatalog'} onClick={e => handlers.showCart()} >
      Back to catalog
    </button>
  )
}

export const ClearAll = () => {
  const { handlers } = React.useContext(CartContext)
  return (
    <div>
      <button className={'handler clearAll'} onClick={e => handlers.clearCart()} >
        Clear all
      </button>
    </div>
  )
}

const CheckOut = () => (
  <button className={'handler checkout'} onClick={e => alert('Checkout!')}>
    Checkout
  </button>
)

export default Buttons
