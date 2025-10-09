import React, { useState } from 'react'

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

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prevData)=> ({...prevData, [name]: value}))

    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formData)
    }

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <fieldset>
            <legend>Payment Information</legend>    
                <input type="password" name='cardNumber' placeholder='card number' onChange={handleChange} required />
                <input type="text" name='cardHolder' placeholder='card holder' onChange={handleChange} required />
                <input type="text" name='cvv' placeholder='cvv' onChange={handleChange} required />
                <input type="text" name='exp' placeholder='exp mm/yy' onChange={handleChange} required />
            </fieldset>

            <fieldset>
                <legend>Shipping Information</legend>
                <input type="text" name='addressLine1' placeholder='Address Line 1' onChange={handleChange}/>
                <input type="text" name='addressLine2' placeholder='Address Line 2' onChange={handleChange}/>
                <input type="text" name='city' placeholder='City' onChange={handleChange}/>
                <input type="text" name='state' placeholder='State' onChange={handleChange}/>
                <input type="text" name='zip' placeholder='Zip' onChange={handleChange}/>
            </fieldset>
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default CheckoutForm