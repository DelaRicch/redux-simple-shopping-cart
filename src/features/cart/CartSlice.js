import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoadding: true,
    cartItems: [],
    quantity: 0,
    total: 0
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    }
})


export default CartSlice.reducer