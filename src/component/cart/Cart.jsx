import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/CartSlice";
import './Cart.css'

const Cart = ({isOpen}) => {
  const { cartItems, totalPrice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <aside className={isOpen ? 'aside-show' : ''}>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-items">
          <div className="items">
            <div className="item-image">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="item-desc">
              <h4>{item.title}</h4>
              <span>Price: ${item.price}</span>
            </div>
            <div className="buttons">
              <button className="increase">+</button>
              <span>{item.quantity}</span>
              <button className="decrease">-</button>
            </div>
          </div>
        </div>
      ))}
      <hr />
          <div className="total">
            <span className="total-price">Total Price</span>
            <span className="price">${totalPrice.toFixed(2)}</span>
          </div>
            <button className="clear-cart"  onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </aside>
  );
};

export default Cart;
