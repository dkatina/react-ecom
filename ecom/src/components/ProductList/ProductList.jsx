import React from 'react'
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({ products }) => {
  return (
    <div className="card-list">
        {products.map((product, idx)=>( 
            <ProductCard product={product} />
        ))}
        
    </div>
  )
}

export default ProductList