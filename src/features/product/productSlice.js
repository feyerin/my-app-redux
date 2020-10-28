import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductApi from './api';

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async () => {
        try {
            return await ProductApi.getList()
        } catch (e) {
            return e;
        }
    }
  )

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
  },
  reducers: {
    setList: (state, action) => {
        state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, { payload }) => {
        state.productList = payload;
    });
  }
});

export const { setList } = productSlice.actions;

export const selectProduct = state => state.product.value;

export default productSlice.reducer;
