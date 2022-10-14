import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import CartItem from "../../CartItem.json";

const initialState = {
  isLoadding: true,
  cartItems: [],
  amount: 0,
  total: 0,
  totalPrice: 0,
  cartContent: []
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error.message);
    return true
  }
});

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartContent.find((item) => item.id === action.payload.id);
      if (itemInCart >= 0) {
        state.cartContent[itemInCart].amount += 1;
      } else {
        state.cartContent.push({ ...action.payload, amount: 1 });
      }
    },

    clearCart : (state) => {
        state.cartContent = []
    }
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoadding = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoadding = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoadding = false;
    },
  },
});

export const { isLoadding, addToCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
