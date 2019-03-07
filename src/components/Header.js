import React from 'react'
import { CartItems } from './Cart'
import settings from '../settings'

const Header = (props) => {
  const { cartTotal } = props.data
  return (
    <div>
      <h1>{settings.siteName}</h1>
      <CartItems items={cartTotal} />
    </div>
  )
}

export default Header
