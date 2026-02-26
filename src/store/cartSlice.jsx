import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    items: [],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id == action.payload.id)
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id != action.payload.id)
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload
            const item = state.items.find((item) => item.id == id)
            if (item) {
                if (quantity > 0) {
                    item.quantity = quantity
                } else {
                    state.items = state.items.filter((item) => item.id != id)
                }
            }

        },
        clearCart: (state) =>{
            state.items = []
        }
    }
})

export const{addToCart,clearCart,removeFromCart,updateQuantity} = cartSlice.actions
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalItems = (state) => state.cart.items.reduce((total,item)=>total+item.quantity,0)
export const selectCartTotalPrice = (state) => state.cart.items.reduce((total,item)=>total+item.price*item.quantity,0)
export default cartSlice.reducer