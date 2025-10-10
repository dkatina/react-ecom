import React from 'react'
import CheckoutForm from '../components/CheckoutForm/CheckoutForm'
import './CheckoutView.css'

const CheckoutView = () => {
  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <h1>Checkout</h1>
      </header>

      <main className="checkout-main">
        <CheckoutForm/>
      </main>
    </div>
  )
}

export default CheckoutView