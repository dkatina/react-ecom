import React, { useState, useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import './CheckoutForm.css'

const CheckoutForm = () => {
    const [formData, setFormData] =useState({
        cardNumber: '',
        cardHolder:'',
        cvv: '',
        exp:'',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip:''
    })
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();


    const [formSubmit, setFormSubmit] = useState(null)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prevData)=> ({...prevData, [name]: value}))

    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        setFormSubmit(formData)
    }

    useEffect (()=>{

        const sendOrder = () =>{
            if (!formSubmit) {
                return
            }
            //API CALL TO BACKEND TO PROCESS ORDER
            //Payload
            console.log('Sending order info to backend')
            console.log({
                billingInfo: formSubmit,
                orderItems: cartItems
            })

            clearCart(); //after sending the order we should clear our cart
            setFormData({
        cardNumber: '',
        cardHolder:'',
        cvv: '',
        exp:'',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip:''
    })
            navigate('/') //after submitting we will navigate home
        }

        sendOrder()

    }, [formSubmit]) //runs whenever component mounts or when formSubmit changes

  return (
   
        <form className="checkout-form" onSubmit={handleSubmit}>
            <fieldset>
            <legend>Payment Information</legend>
                <div className="payment-grid">
                    <input type="password" name='cardNumber' placeholder='card number' onChange={handleChange} required />
                    <input type="text" name='cardHolder' placeholder='card holder' onChange={handleChange} required />
                    <input type="text" name='cvv' placeholder='cvv' onChange={handleChange} required />
                    <input type="text" name='exp' placeholder='exp mm/yy' onChange={handleChange} required />
                </div>
            </fieldset>

            <fieldset>
                <legend>Shipping Information</legend>
                <div className="payment-grid">
                    <input type="text" name='addressLine1' placeholder='Address Line 1' onChange={handleChange}/>
                    <input type="text" name='addressLine2' placeholder='Address Line 2' onChange={handleChange}/>
                    <input type="text" name='city' placeholder='City' onChange={handleChange}/>
                    <input type="text" name='state' placeholder='State' onChange={handleChange}/>
                    <input type="text" name='zip' placeholder='Zip' onChange={handleChange}/>
                </div>
            </fieldset>
            <div className="submit-row">
                <button type='submit'>Submit</button>
            </div>
        </form>

   
  )
}

export default CheckoutForm