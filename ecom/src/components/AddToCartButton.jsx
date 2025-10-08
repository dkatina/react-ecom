import React from 'react'
import { useCart } from '../context/CartContext'

const AddToCartButton = ({product}) => {
    //Logic to add a product to cart
    const { addToCart } = useCart();

  return (
    <button onClick={()=>addToCart(product)}>Add to Cart</button>
  )
}

export default AddToCartButton