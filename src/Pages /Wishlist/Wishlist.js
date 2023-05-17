import React from "react";
import "../index.css";
import { useSelector ,useDispatch} from 'react-redux';
import { Navbar } from "../../Components";
import {removeItemFromWishlist} from '../../redux/cartWishlistSlice';
const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist)
  const dispatch = useDispatch()
  return (
    <>
     <Navbar/>
    <div className="cart_section">
      {wishlist?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="{picture}" />
            <p>{item.title}</p>
          </div>
          <div>
            <span>Rs.{item.price}</span>
            <br />
            <button onClick={() => dispatch(removeItemFromWishlist(item?.id))}> Remove </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Wishlist;
