import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart,fetchItemsByUserId,updateCart } from './CartAPI';

const initialState = {
  status: `idle`,
  items: [],
};
export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (item) => {
    const response = await addToCart(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchItemsByUserIdAsync = createAsyncThunk(
  'cart/fetchItemsByUserIdAsync',
  async (userId) => {
    const response = await fetchItemsByUserId(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const updateCartAsync = createAsyncThunk(
  'cart/updateCartAsync',
  async (update) => {
    const response = await updateCart(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const deleteItemFromCartAsync = createAsyncThunk(
  'cart/deleteItemFromCartAsync',
  async (itemId) => {
    const response = await deleteItemFromCartAsync(itemId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=(action.payload);
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =state.items.findIndex(item=>item.id===action.payload.id)
        state.items[index]=(action.payload);
      })
      .addCase(deleteItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =state.items.findIndex(item=>item.id===action.payload.id)
        state.items.splice(index,1);
      })
  
  },
});

export const { increment } = productSlice.actions;
// ? sign laga diye ho sakta hai starting me usko state.counter k andar value naa mile to ? lagane se agar value nahi hai to error nahi aega
export const selectItems = (state) => state.cart.items;

export default productSlice.reducer;
