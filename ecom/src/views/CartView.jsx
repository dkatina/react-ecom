import CartList from '../components/CartList/CartList'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';
import './CartView.css'

const CartView = () => {
    const { total } = useCart();
    const navigate = useNavigate();
  return (
    <div className="cart-page">
        <div className="cart-top">
            <h2>My Cart</h2>
            <div className="cart-actions">
                <span className="cart-total">Total: ${total.toFixed ? total.toFixed(2) : total}</span>
                <button className="checkout-btn" onClick={()=>navigate("/checkout")}>Checkout</button>
            </div>
        </div>

        <CartList/>

    </div>
  )
}

export default CartView