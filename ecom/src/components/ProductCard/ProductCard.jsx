import React from 'react'
import './ProductCard.css'
import AddToCartButton from '../AddToCartButton'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({product}) => {
  const navigate = useNavigate()

  return (
    <div className="product-card" onClick={()=>navigate('/products/'+ product.id)}>
        <img src={product.thumbnail} alt="" />
        <h3>{product.title}</h3>
        <h4>{product.brand}</h4>
        <p>Price: ${product.price} - Rating: {product.rating}/5</p>
        <AddToCartButton product={product}/>
    </div>
  )
}

export default ProductCard