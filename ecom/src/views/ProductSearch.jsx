import React, { useState, useEffect } from 'react'
import ProductList from '../components/ProductList/ProductList'
import './ProductSearch.css'

const ProductSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [ submitSearch, setSubmitSearch ] = useState(localStorage.getItem('prevSearch') || '')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const handleSubmit = (e) =>{
        e.preventDefault()
        localStorage.setItem('prevSearch', searchTerm)
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
        <div className="search-page">
                <header className="search-header">
                    <h1>Search</h1>
                </header>

                <form className="search-form" onSubmit={(e)=>handleSubmit(e)}>
                        <input
                                className="search-input"
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e)=>setSearchTerm(e.target.value)}
                        />
                        <button className="search-btn" type='submit'>Search</button>
                </form>

                <section className="results">
                        <ProductList products={products}/>
                </section>
        </div>
    )
}

export default ProductSearch