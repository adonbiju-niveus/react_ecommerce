import { configureStore } from '@reduxjs/toolkit';
import cartWishlistReducer from '../redux/cartWishlistSlice'

export default configureStore({
  reducer: cartWishlistReducer
});