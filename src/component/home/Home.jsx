import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../../features/cart/CartSlice'
import './Home.css'

const Home = () => {
    const dispatch = useDispatch()
    const {cartItems, isLoadding} = useSelector((store)=>store.cart)

    useEffect(() => {
        dispatch(getCartItems)
    }, [])

    // if (isLoadding) {
    //     return (
    //         <div className="loading">
    //             <h3>Loading...</h3>
    //         </div>
    //     )
    // }
  return (
    <main>
        {
            cartItems.map((item) => (
                <div className='cart-items' key={item.id}>
                    <div className="cart-image">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className="cart-desc">
                        <h2>{item.title}</h2>
                        <span>Price: ${item.price}</span>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            ))
        }
    </main>
  )
}

export default Home