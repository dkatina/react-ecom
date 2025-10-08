import React from 'react'
import './CartItemCard.css'
import { useCart } from '../../context/CartContext'

const CartItemCard = ({ item }) => {
  const { removeItem } = useCart(); //calling context to access my removeItem function

  return (
    <div className='cartItemCard'>
        <div className='left'>
            <img className='cartCardImg'src={item.thumbnail} alt="" />
            <div className='card-info'>
                <h4>{item.title}</h4>
                <p>Brand - {item.brand}</p>
                <p>Price: {item.price}</p>

            </div>
        </div>
        <div className='right'>
            <p>qty: {item.quantity}</p>
            <button onClick={()=>removeItem(item.id)}>remove</button>
        </div>

    </div>
  )
}

export default CartItemCard