import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoadding: true,
  cartItems: [],
  cartContent: localStorage.getItem("cartContent")
    ? JSON.parse(localStorage.getItem("cartContent"))
    : [],
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error.message);
    return error.message
  }
});

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartContent.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemInCart >= 0) {
        state.cartContent[itemInCart].amount++;
      } else {
        const existingItem = { ...action.payload, amount: 1 };
        state.cartContent.push(existingItem);
      }
      localStorage.setItem("cartContent", JSON.stringify(state.cartContent));
    },

    increase: (state, action) => {
      const itemId = state.cartContent.find(
        (item) => item.id === action.payload.id
      );
      itemId.amount = itemId.amount + 1;
      localStorage.setItem("cartContent", JSON.stringify(state.cartContent));
    },

    decrease: (state, action) => {
      const itemId = state.cartContent.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartContent[itemId].amount > 1) {
        state.cartContent[itemId].amount -= 1;
      }
      localStorage.setItem("cartContent", JSON.stringify(state.cartContent));
    },

    removeItem: (state, action) => {
      const remove = state.cartContent.filter(
        (item) => item.id !== action.payload
      );
      state.cartContent = remove;
      localStorage.setItem("cartContent", JSON.stringify(state.cartContent));
    },

    clearCart: (state) => {
      state.cartContent = [];
      localStorage.setItem("cartContent", JSON.stringify(state.cartContent));
    },

    allTotals: (state) => {
      // let {total, quantity} = state.cartContent.reduce((cartTotal, cartItem) => {
      //   const {price, amount} = cartItem
      //   const itemTotal = price * amount

      //   cartTotal.total += itemTotal
      //   cartTotal.quantity =+ amount
        
      //   return cartTotal
      // },
      // )

        let total = 0
        let amount = 0

        state.cartContent.forEach((item) => {
          amount += item.amount
          total += item.amount * item.price
        })
        state.cartTotalQuantity = amount
        state.cartTotal = total
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoadding = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoadding = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      state.isLoadding = false;
      // state.cartItems = action.payload;
    },
  },
});

export const {
  isLoadding,
  addToCart,
  clearCart,
  removeItem,
  increase,
  decrease,
  allTotals
} = CartSlice.actions;
export default CartSlice.reducer;
