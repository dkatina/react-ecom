import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductDetailCard from '../components/ProductDetailCard/ProductDetailCard';

const ProductDetailView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)

    useEffect (()=>{
        const getProduct = async () =>{
            try{
                const response = await fetch(`https://dummyjson.com/products/${id}`)
                if (!response.ok){
                    throw new Error('ERROR! '+ response)
                }
                const productData = await response.json() //translating JSON to JS
                setProduct(productData)
            } catch (error) {
                console.log(error)
            }
        };

        getProduct() //call our API function we just defined

    },[]) //useEffect with an empty dependency array will only fire on component mount

  return (
    <>
    <div>ProductDetailView {id}</div>
    {product ?
        <ProductDetailCard product={ product }/> //create card component to display the product information in detail
        // I WANT TO SEE THE REVIEWS HERE MAKE A NEW COMPONENT TO SHOW THE REVIEWS <ReviewsList reviews={product.reviews}/>
    :
        <p>Loading....</p>
    }

    </>
  )
}

export default ProductDetailView