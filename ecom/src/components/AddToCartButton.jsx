import React from 'react'
import { useCart } from '../context/CartContext'
import './AddToCartButton.css'

const AddToCartButton = ({product}) => {
    //Logic to add a product to cart
    const { addToCart } = useCart();

  return (
    <button className="add-to-cart-btn" onClick={()=>addToCart(product)}>Add to Cart</button>
  )
}

export default AddToCartButton