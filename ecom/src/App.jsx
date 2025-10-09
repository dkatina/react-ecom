import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import HomeView from "./views/HomeView"
import ProductSearch from "./views/ProductSearch"
import ProductDetailView from "./views/ProductDetailView"
import CartView from "./views/CartView"
import CheckoutView from "./views/CheckoutView"

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/products/search' element={<ProductSearch/>}/>
        <Route path='/products/:id' element={<ProductDetailView/>}/>
        <Route path='/my-cart' element={<CartView/>}/>
        <Route path='/checkout' element={<CheckoutView/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
