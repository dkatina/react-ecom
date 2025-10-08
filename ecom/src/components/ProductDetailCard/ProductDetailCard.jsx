import React from 'react'
import './ProductDetailCard.css'
import AddToCartButton from '../AddToCartButton'

const ProductDetailCard = ({ product }) => {
    //potentially add carousel
  return (
    <div className='detail-container'>
        <div className='top'>
            <img className='detailImg'src={product.images[0]} alt="" /> 
            <div className='info-box'>
                <h2 className='detailTitle'>{product.title}</h2>
                <h4 className='detailBrand'>{product.brand}</h4>
                <hr />
                <p className='detailP'>Price: ${product.price}</p>
                <p className='detailP'>Rated: {product.rating}/5</p>
                {product.stock?
                    <p className='detailP'>Stock: {product.stock}</p>
                    :
                    <p className='detailP'>Out of Stock</p>
            }
                <p className='detailP'>Description:</p>
                <p className='detailP'>{product.description}</p>
                <AddToCartButton product={product}/>
            </div>
        </div>
        <div className='description'>
            

        </div>
    </div>
  )
}

export default ProductDetailCard