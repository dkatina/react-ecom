import React from 'react'
import './CartItemCard.css'

const CartItemCard = ({ item }) => {
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
        </div>

    </div>
  )
}

export default CartItemCard