import CartList from '../components/CartList/CartList'
import { useCart } from '../context/CartContext'

const CartView = () => {
    const { total } = useCart();
  return (
    <>
        <div></div>
        <CartList/>
        <p>Total: {total}</p>
    </>
  )
}

export default CartView