import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import HomeView from "./views/HomeView"
import ProductSearch from "./views/ProductSearch"

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/products/search' element={<ProductSearch/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
