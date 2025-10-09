import CartList from '../components/CartList/CartList'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';

const CartView = () => {
    const { total } = useCart();
    const navigate = useNavigate();
  return (
    <>
        <div></div>
        <CartList/>
        <p>Total: {total}</p>
        <button onClick={()=>navigate("/checkout")}>Checkout</button>
    </>
  )
}

export default CartView