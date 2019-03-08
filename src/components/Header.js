import React from 'react'
import { CartItems } from './Cart'
import settings from '../settings'

const Header = (props) => {
  const { cartTotal } = props.data
  return (
    <header>
      <div><h1>{settings.siteName}</h1></div>
      <div><CartItems items={cartTotal} /></div>
    </header>
  )
}

export default Header
