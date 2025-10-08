import { createContext, useContext, useState, useEffect} from 'react'

//creat the cart context
const CartContext = createContext();

// create hook to consume/use our CartContext
export const useCart = () => {
    const context = useContext(CartContext);
    return context
}

export const CartProvider = ({ children }) =>{

    const [cartItems, setCartItems ] = useState([])

    //Grab cart from local storage if one exists
    useEffect(()=>{
        const storedCart = localStorage.getItem('my-cart')
        if (storedCart){
            setCartItems(storedCart)
        }
    },[])

    //Store cart changes to local storage when their made
    useEffect(()=>{
        localStorage.setItem('my-cart', JSON.stringify(cartItems))
    }, [cartItems]) //dependency array that fires whenever cartItems is updated

    //add items to cart
    const addToCart = (product) =>{
        
    }

}
