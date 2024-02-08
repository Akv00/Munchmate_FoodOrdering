import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addItem: (state, action)=> {
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state, action)=> {
            state.items.pop();
        },
        //original state = {items: ["pizza"]}
        clearCart: (state, action)=> {
            //RTK - either mutate the existing state or return a new state
            // state.items.length = 0; // originalState= []
            state.items.length = 0;
            //return {items:[]}; // this new object will be replaced inside orginalState = {items:[]};
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;