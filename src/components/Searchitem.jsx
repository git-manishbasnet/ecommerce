
import { useParams } from 'react-router-dom'
import { items } from './Data'
import { useEffect } from 'react'
import Products from './Products'
import { useState } from 'react'

function Searchitem({cart,setcart}) {
  // console.log(useParams())
  const {term}=useParams()
  const [filterdata, setfilterdata] = useState([])
  useEffect(() => {
    const filteredData=()=>{
      const data=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()) )
      // console.log(data)
      setfilterdata(data)
    }
    filteredData()
    
  }, [term])
  
  return (
   <Products cart={cart} setcart={setcart} items={filterdata}/>
  )
}

export default Searchitem