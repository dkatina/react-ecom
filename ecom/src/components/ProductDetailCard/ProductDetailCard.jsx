import React from 'react'
import './ProductDetailCard.css'
import AddToCartButton from '../AddToCartButton'

const ProductDetailCard = ({ product }) => {
    //potentially add carousel
  return (
    <div className='detail-container'>
        <div className='top'>
            <img src={product.images[0]} alt="" /> 
            <div className='info-box'>
                <h2>{product.title}</h2>
                <h4>{product.brand}</h4>
                <hr />
                <p>Price: ${product.price}</p>
                <p>Rated: {product.rating}/5</p>
                {product.stock?
                    <p>Stock: {product.stock}</p>
                    :
                    <p>Out of Stock</p>
            }
                <p>Description:</p>
                <p>{product.description}</p>
                <AddToCartButton/>
            </div>
        </div>
        <div className='description'>
            

        </div>
    </div>
  )
}

export default ProductDetailCard