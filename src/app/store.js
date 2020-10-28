import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/product/reducer';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    product: ProductReducer,
  },
});
