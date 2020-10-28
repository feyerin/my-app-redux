import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productSlice  from '../features/product/productSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    product: productSlice,
  },
});
