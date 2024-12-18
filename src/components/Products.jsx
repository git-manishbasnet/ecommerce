
// import { items } from './Data'
import { Link } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';

function Products({ items, cart, setcart }) {
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
            <div className=' container my-5'>
                <div className="row">
                    {
                        items.map((product) => {
                            return (

                                <div className=" col-lg-4 col-md-6 my-3 text-center" key={product.id}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <Link to={`/product/${product.id}`} className='flex justify-center items-center'>

                                            <img src={product.imgSrc} className="card-img-top" alt="..." />
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <button className='btn btn-primary mx-3'>{product.price}{" "}₹</button>
                                            <button
                                                onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                                                className='btn btn-warning'>Add to cart</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products