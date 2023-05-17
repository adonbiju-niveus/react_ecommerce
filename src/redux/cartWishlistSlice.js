import { createSlice } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';


const initialState = {
    cart: [],
    wishlist:[]
  };
export const cartWishlistSlice = createSlice({
  name: 'CartWishlist',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const itemInCart = state.cart.find((item) => item.id === action.payload.id);
        if (itemInCart) {
          itemInCart.quantity++;
          enqueueSnackbar("item already added in the Cart!!", { variant: 'warning',anchorOrigin:{ vertical: "top", horizontal: "left" } })
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
          enqueueSnackbar("item  added in the Cart!!", { variant: 'success',anchorOrigin:{ vertical: "top", horizontal: "left" } })
        }
      },
      addToWishlist: (state, action) => {
        const itemInWishlist = state.wishlist.find((item) => item.id === action.payload.id);
        if (!itemInWishlist) {
          state.wishlist.push({ ...action.payload});
          enqueueSnackbar("item  added in the Wishlist!!", { variant: 'success',anchorOrigin:{ vertical: "top", horizontal: "left" } })
        } else {
            //console.log("item already added in the wishlist!!")
            enqueueSnackbar("item already added in the wishlist!!", { variant: 'warning',anchorOrigin:{ vertical: "top", horizontal: "left" } })
        }
      },
      incrementQuantity: (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        item.quantity++;
      },
      decrementQuantity: (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item.quantity === 1) {
          item.quantity = 1
        } else {
          item.quantity--;
        }
      },
      removeItemFromCart: (state, action) => {
        const removeItem = state.cart.filter((item) => item.id !== action.payload);
        state.cart = removeItem;
      },
      removeItemFromWishlist: (state, action) => {
        const removeItem = state.wishlist.filter((item) => item.id !== action.payload);
        state.wishlist = removeItem;
      },
  },
});

export const { addToCart, addToWishlist,incrementQuantity,decrementQuantity, removeItemFromCart,removeItemFromWishlist} = cartWishlistSlice.actions;

export default cartWishlistSlice.reducer;