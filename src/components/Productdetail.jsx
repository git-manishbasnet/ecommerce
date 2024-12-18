import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import { useState } from 'react'
import { useEffect } from 'react'
import Products from './Products'
import { ToastContainer, toast, Bounce } from 'react-toastify';
function Productdetail({ cart, setcart }) {
    const { id } = useParams()
    const [product, setproduct] = useState({});
    const [relatedproducts, setrelatedproducts] = useState([])
    useEffect(() => {
        const filterproduct = items.filter((product) => product.id == id)
        // console.log(filterproduct)
        setproduct(filterproduct[0])

        const relatedproducts = items.filter((p) => p.category === product.category)

        console.log("RelatedProducts = ", relatedproducts)
        setrelatedproducts(relatedproducts)
    }, [id, product.category])

    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = {
            id, price, title, description, imgSrc
        }
        setcart([...cart, obj])
        console.log("Cart elements = ", cart)
        toast.success('Item added to cart', {
            position: "top-right",
            autoClose: 1498,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }
    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={1498}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <div className=" container con">
                <div className="img">
                    <img src={product.imgSrc} alt="" />
                </div>
                <div className='text-center'>
                    <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}</p>
                    <button className='btn btn-primary mx-3'>{product.price}{" "}₹</button>
                    <button
                        onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                        className='btn btn-warning'>Add to cart
                    </button>
                </div>
            </div>
            <h1 className='text-center'>Related Products</h1>
            <Products cart={cart} setcart={setcart} items={relatedproducts} />
        </>
    )
}

export default Productdetail