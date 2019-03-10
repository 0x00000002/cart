import React from 'react'
import { CartItems } from './Cart'
import settings from '../settings'
import { CartContext } from './CartContext'

const Header = (props) => {
  const { items } = props.data
  const { handlers } = React.useContext(CartContext)
  return (
    <header>
      <div><h1>{settings.siteName}</h1></div>
      <div onClick={e => handlers.showCart()} ><CartItems items={items} /></div>
    </header>
  )
}

export default Header
