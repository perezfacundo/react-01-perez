import React from 'react'
import cart from './assets/cart.svg'

export const CartWidget = () => {
  return (
    <div style={{ marginRight: '20px' }}>
      <img src={cart} alt='cart-widget' width='25px'/>
      0
    </div>
  )
}
