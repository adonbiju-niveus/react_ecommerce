import React from "react";
import "../index.css";
import { Navbar } from "../../Components";
import { useSelector ,useDispatch} from 'react-redux';
import {incrementQuantity,decrementQuantity,removeItemFromCart} from '../../redux/cartWishlistSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

    let totalPrice = 0
    cart.forEach(item => {
      totalPrice += item.price * item.quantity
    })

  return (
    <>
    <Navbar/>
    <div className="cart_section">
      {cart?.map((item) => (
        <div className="cart_box" key={item?.id}>
          <div className="cart_img">
            <img src={item?.img} alt="phone"/>
            <p>{item?.title}</p>
          </div>
          <div>
            <button onClick={() => dispatch(decrementQuantity(item?.id))}> - </button>
            <button>{item?.quantity}</button>
            <button onClick={() => dispatch(incrementQuantity(item?.id))}> + </button>
          </div>
          <div>
            <span>{item?.price}</span>
            <button onClick={() => dispatch(removeItemFromCart(item?.id))}> Remove </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total price of your cart</span>
        <span>Rs {totalPrice}</span>
      </div>
      <br />
      <div className="location">
        <select className="location">
          <option selected value="location" disabled>
            Choose location
          </option>
          <option value="India">India</option>
          <option value="Kerala">Kerala</option>
          <option value="canada">Canada</option>
        </select>
      </div>
      <br />
      <div className="Checkout">
        <button className="button">Sign-in</button>
        <button className="button">Registered user</button>
      </div>
    </div>
    </>
  )
};

export default Cart;
