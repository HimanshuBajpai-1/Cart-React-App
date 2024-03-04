import {createReducer} from '@reduxjs/toolkit';

export const cartReducer = createReducer({
    cartItems : [],
    subTotal : 0,
    shipping : 0,
    tax:0,
    total : 0
},(builder) => {
  builder
    .addCase("addToCart", (state, action) => {
        const Item = action.payload;
        const isItemExist = state.cartItems.find((i)=>i.id===Item.id);
        if(isItemExist){
            state.cartItems.forEach((i)=>{
                if(i.id===Item.id) i.quantity++;
            })
        }else{
            state.cartItems.push(Item);
        }     
    })
    .addCase("increment", (state, action) => {
        const ItemID = action.payload;
        state.cartItems.forEach((i)=>{
            if(i.id===ItemID) i.quantity++;
        })  
    })
    .addCase("decrement", (state, action) => {
        const ItemID = action.payload;
        const item = state.cartItems.find((i)=>i.id===ItemID);
        if(item.quantity>1){
            state.cartItems.forEach((i)=>{
                if(i.id===item.id) i.quantity--;
            })
        }  
    })
    .addCase("deleteItem", (state, action) => {
        const ItemID = action.payload;
        state.cartItems = state.cartItems.filter((i)=>i.id!==ItemID);     
    })   
    .addCase("calculatePrice", (state) => {
        let sum = 0;     
        state.cartItems.forEach((i)=>(sum += (i.price * i.quantity)))
        state.subTotal = +sum.toFixed(3);
        state.shipping = state.subTotal > 1000 ? 0 : 200;
        state.tax = +(state.subTotal * 0.18).toFixed(3);
        state.total =  +(state.subTotal + state.shipping + state.tax).toFixed(3);
    })  
})