import React from 'react';
import './Navbar.css'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  const wishlist = useSelector((state) => state.wishlist)
 
  return (
    <nav>
      <div className="nav_loc">
      <Link to='/'>
        <span className="My_basket">
            Oppo Store
        </span>
        </Link>
        <Link to="/wishlist">
        {/* <span className="wishlist"> Wishlist</span> */}
        <div className="cart">
            <span>
                Wishlist
            </span>
            <span>{wishlist?.length}</span>
        </div>
        </Link>
        <Link to="/cart">
        <div className="cart">
            <span>
                <i className="fas fa-cart-plus"></i>
            </span>
            <span>{cart?.length}</span>
        </div>
        </Link>
     </div>
    </nav>
  )
}

export default Navbar