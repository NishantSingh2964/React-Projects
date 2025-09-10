import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './CartSlice'
import ProductSlice from './ProductSlice'


const Store = configureStore({
    reducer:{
       cart: cartSlice,
       products: ProductSlice,
    }
})

export default Store;