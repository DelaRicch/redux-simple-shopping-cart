import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import CartItem from '../../CartItem.json'

const initialState = {
  isLoadding: true,
  cartItems: CartItem,
  quantity: 0,
  total: 0,
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const res = await axios(url);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action) {

    // }
  },
  extraReducers: {
    [getCartItems.pending]: (state) =>{
        state.isLoadding = true
    },
    [getCartItems.fulfilled]: (state, action) =>{
        state.isLoadding = false
        state.cartItems = action.payload
    },
    [getCartItems.pending]: (state) =>{
        state.isLoadding = false
    },
  }
});

export const { isLoadding } = CartSlice.actions;
export default CartSlice.reducer;
