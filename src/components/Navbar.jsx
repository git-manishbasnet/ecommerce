
import { Link,  useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import logo from '../assets/logo.webp';

function Navbar({setdata,cart}) {
  // console.log(useLocation())
  const location=useLocation()
  const navigate=useNavigate()
const [searchterm, setsearchterm] = useState("")

  const filterByCategory=(category)=>{
const elements =items.filter((product)=>product.category===category)
  // console.log(element)
setdata(elements)
}
const filterByPrice=(price)=>{
  const elements=items.filter((product)=>product.price>=price)
setdata(elements)
}
const handlesubmit=(e)=>{
  e.preventDefault()
  navigate(`/search/${searchterm}`)
  setsearchterm("")
}
  return (
   <>
     <header className='sticky-top'>
      <div className="nav-bar">

        <div className='flex space-x-10 items-center'>
        <img src={logo} alt="Logo" className='h-9 w-9 rounded-full ml-5'/>
        

        <Link to={'/'} className="brand"><IoMdHome size={32}/></Link>
        </div>
        <form onSubmit={handlesubmit} className="search-bar justify-center flex">
          <input className='text-black px-2'
          value={searchterm}
          onChange={(e)=>setsearchterm(e.target.value)}
           type="text" 
           placeholder="Search Products" />
        </form>

        <Link to={'/cart'} className='cart'>
        <button type="button" className="btn btn-primary position-relative">
        <FaShoppingCart />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
        </Link>
      </div>
      {
        location.pathname =='/' &&(
      <div className='nav-bar-wrapper'>
    <div className="items">Filter by {"->"}</div>
    <div onClick={()=>setdata(items)} className="items">No Filter</div>
    <div onClick={()=>filterByCategory('mobiles')}  className="items">Mobiles</div>
    <div  onClick={()=>filterByCategory('laptops')}  className="items">Laptops</div>
    <div onClick={()=>filterByCategory('tablets')}  className="items">Tablets</div>
    <div onClick={()=>filterByPrice(29999)} className="items">{">="}29999</div>
    
    <div onClick={()=>filterByPrice(49999)} className="items">{">="}49999</div>
    <div onClick={()=>filterByPrice(69999)} className="items">{">="}69999</div>
    <div onClick={()=>filterByPrice(99999)} className="items">{">="}99999</div>
      </div>
        )
      }
      
    </header>
   </>
  )
}

export default Navbar