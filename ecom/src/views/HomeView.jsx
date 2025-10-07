import React from 'react'
import { useEffect, useState } from 'react'
import ProductList from '../components/ProductList/ProductList'

const HomeView = () => {
    //API Call on page load to the all products endpoint on the dummyjson API 
    // set a state variable 'products' to the data returned from the api call
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) //page starts as loading, once products are fetched loading = false

    useEffect(()=>{
        const fetchProducts = async () =>{
            try{
                const response = await fetch('https://dummyjson.com/products?limit=10')

                if (!response.ok){
                    throw new Error('Error fetching products: ', response.status)
                }
                const productData = await response.json()
                setProducts(productData.products)
                setLoading(false)
            }catch (err){
                console.log(err)
            }
            
        };

        fetchProducts();
    },[]) //Empty Dependency Array means this will only fire upon component mount

    if (loading){
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }


    //map over the products return and display the product names
  return (
    <>
        <ProductList products={products}/>
    </>
  )
}

export default HomeView