import React from 'react'
import { useCart } from '../../context/CartContext'
import './CartList.css'
import CartItemCard from '../CartItemCard/CartItemCard'

const CartList = () => {
    const { cartItems } = useCart(); //grabbing cartItems from Cart Context
  return (
    <div className='cart-list'>
        {cartItems.length > 0 ?
        cartItems.map((item , idx)=>(
            <CartItemCard key={idx} item={item}/>
        ))
        :
        <p>Cart Empty</p>
        }
        
    </div>
  )
}

export default CartList