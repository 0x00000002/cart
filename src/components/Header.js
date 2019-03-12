import React from 'react'
import { CartItems } from './Cart'
import settings from '../settings/'

const Header = (props) => {
  const { items, handlers } = props.data
  return (
    <header>
      <div><h1>{settings.siteName}</h1></div>
      <div onClick={e => handlers.showCart()} ><CartItems items={items} /></div>
    </header>
  )
}

export default Header
