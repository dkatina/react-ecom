import React from 'react'
import './ProductCard.css'
import AddToCartButton from '../AddToCartButton'

const ProductCard = ({product}) => {

  return (
    <div className="product-card">
        <img src={product.thumbnail} alt="" />
        <h3>{product.title}</h3>
        <h4>{product.brand}</h4>
        <p>Price: ${product.price} - Rating: {product.rating}/5</p>
        <AddToCartButton product={product}/>
    </div>
  )
}

export default ProductCard