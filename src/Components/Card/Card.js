import React from "react";
import "./Card.css";
import { useDispatch } from 'react-redux';
import {addToCart ,addToWishlist} from '../../redux/cartWishlistSlice';

const Card = ({item}) => {
  const { title, price, img ,id} = item;
  const dispatch = useDispatch()

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Rs. {price}</p>
        <button onClick={() => dispatch(addToCart({id, title, img, price}))}>Add to Cart</button>
        <button onClick={() => dispatch(addToWishlist({id, title, img, price}))}>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default Card;
