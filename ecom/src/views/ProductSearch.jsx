import React, { useState, useEffect } from 'react'
import ProductList from '../components/ProductList/ProductList'

const ProductSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [ submitSearch, setSubmitSearch ] = useState('')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setSubmitSearch(searchTerm)
        setSearchTerm('') //clearing input
    }

    useEffect(()=>{
            const fetchProducts = async () =>{
                if (submitSearch){
                try{
                    const response = await fetch(`https://dummyjson.com/products/search?q=${submitSearch}`)
    
                    if (!response.ok){
                        throw new Error('Error fetching products: ', response.status)
                    }
                    const productData = await response.json()
                    setProducts(productData.products)
                    setLoading(false)
                }catch (err){
                    console.log(err)
                }
                }
                
            };
    
            fetchProducts();
        },[submitSearch]) //This fire when submitSearch is update, and also on mount

  return (
    <div>
        <h1>Search</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button type='submit' >search</button>
        </form>
        <ProductList products={products}/>
    </div>
  )
}

export default ProductSearch