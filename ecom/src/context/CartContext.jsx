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
    const [total, setTotal] = useState(0)
    // Individual item:
        // {
        //     title: '',
        //     id: 0,
        //     price: float,
        //     thumbnail: '',
        //     quantitiy: 0
        //     brand: ''
        // }

    //Grab cart from local storage if one exists
    useEffect(()=>{
        const storedCart = localStorage.getItem('my-cart')
        if (storedCart){
            setCartItems(JSON.parse(storedCart))
        }
        
    },[])

    //Store cart changes to local storage when their made
    useEffect(()=>{
        localStorage.setItem('my-cart', JSON.stringify(cartItems))

        //Whenever our cart changes we will calculate the new total
        let temp_total = 0

        cartItems.forEach((item)=>{
            temp_total += item.price * item.quantity
        })

        setTotal(temp_total)
    }, [cartItems]) //dependency array that fires whenever cartItems is updated

    // add items to cart
    const addToCart = (product) =>{

        //see if item already exists in the list
        const existingItem = cartItems.find((item)=> item.id === product.id) //checks the ids of items in cart and sees if there is a match to the product we are passing in
        setTotal((prevTotal)=> prevTotal + product.price)
        //if so update the quantity of just that item
        if (existingItem){
            // create a new array with the updated quantity (do not mutate existing state)
            const newCart = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )

            setCartItems(newCart)
        }else{
            const newItem =  {
                title: product.title,
                id: product.id,
                price: product.price,
                thumbnail: product.thumbnail,
                quantity: 1,
                brand: product.brand
            }
            setCartItems((prevItems)=>[...prevItems, newItem])
        }
        //else add new item to the list
    }


    //write a function to change the state variable cartItems. The function will take an item's id an remove the item.This is react make sure you are properly changing state with the setCartItems().
    const removeItem = (id) =>{
        setCartItems((prevItems)=>prevItems.filter((item)=> item.id !== id))
    }


    //write a function that will increment or decrement the qty of an item given the item's id. if the quantity reaches 0 remove the item from the list. Reminder, we are modifying an item in the cartItems state variable we will need to setCartItems at some point.
    const updateQuantity = (id, quantity) =>{
        console.log('updating')
        if (quantity <= 0) {
            removeItem(id)
            return
        }
        // produce a new array with the updated quantity
        // .map() is OUT OF PLACE and returns a modified array
        const newCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: quantity } : item
        )

        console.log(newCart)
        setCartItems(newCart)
    }



    




    const value = {
            cartItems,
            addToCart,
            total,
            removeItem,
            updateQuantity
        }

        return(
            <CartContext.Provider value={value}>
                { children }
            </CartContext.Provider>

        )

}
