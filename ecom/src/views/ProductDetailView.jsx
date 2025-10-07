import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

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
        <ProductDetailCard product={ product }/>
    :
        <p>Loading....</p>
    }

    </>
  )
}

export default ProductDetailView