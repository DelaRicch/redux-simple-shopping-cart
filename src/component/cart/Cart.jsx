import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTotals, clearCart, decrease, increase, removeItem } from "../../features/cart/CartSlice";
import './Cart.css'



const Cart = ({isOpen, showCartFunc}) => {
  const { cartContent, cartTotal } = useSelector((store) => store.cart);

  const dispatch = useDispatch();


  // Bringing Comma between total price  
  let totalPrice =  Number(cartTotal).toLocaleString(undefined, { maximumFractionDigits: 2 })
  
  
  useEffect(() => {
    dispatch(allTotals());
  }, [cartContent, dispatch]);
  
  if (cartContent < 1) {
    return (
      <aside className={isOpen ? "aside-show cart-empty" : ''}>
        <h5>Your Cart is currently empty :(</h5>
      </aside>
    )
  } else {
    
    return (
      <aside className={isOpen ? 'aside-show' : ''}>
        <div className="cart-items">
      {cartContent.map((item) => (
          <div key={item.id} className="items">
            <div className="item-image">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="item-desc">
              <h4>{item.title}</h4>
              <span>Price: ${item.price}</span>
              <span>Total: ${Number(item.price * item.amount).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            <button onClick={() => dispatch(removeItem(item.id))} className="remove">Remove</button>
            </div>
            <div className="buttons">
              <button className="increase" onClick={() => dispatch(increase(item))}>+</button>
              <span>{item.amount}</span>
              <button className="decrease" onClick={() => dispatch(decrease(item))}>-</button>
            </div>
            <hr />
          </div>
      ))}
      </div>
      <hr />
          <div className="total">
            <span className="total-price">Total Price:</span>
            <span className="price">${totalPrice}</span>
          </div>
            <button className="clear-cart"  onClick={() => dispatch(clearCart(), showCartFunc())}>Clear Cart</button>
    </aside>
  );
      }
};

export default Cart;
