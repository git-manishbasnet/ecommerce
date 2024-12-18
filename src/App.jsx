
import { items } from './components/Data'
import Navbar from "./components/Navbar";
import Productdetail from "./components/Productdetail";
import Products from "./components/Products";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Searchitem from "./components/Searchitem";
import Cart from "./components/Cart";
import { useState } from 'react';
function App() {
 
const [data,setdata]=useState([...items])
const [cart, setcart] = useState([])
  return (
    <>
   

    <BrowserRouter>
  <Navbar cart={cart} setdata={setdata}/>
  <Routes>
    <Route path="/" element={<Products cart={cart} setcart={setcart} items={data}/>}/>
    <Route path="/product/:id" element={<Productdetail cart={cart} setcart={setcart}/>}/>
    <Route path="/search/:term" element={<Searchitem cart={cart} setcart={setcart}/>}/>
    <Route path="/cart" element={<Cart cart={cart} setcart={setcart}/>}/>
   
  </Routes>
  
  </BrowserRouter>
  
    </>
  )
}

export default App
