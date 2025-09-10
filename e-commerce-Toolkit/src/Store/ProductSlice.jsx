import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import StatusCode from "../Utills/StatusCode"

const initialState = {
    data: [],
    status: StatusCode.IDLE
}

const ProductSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        // fetchProduct(state, action) {
        //   state.data = action.payload
        // }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = StatusCode.LOADING
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusCode.IDLE
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = StatusCode.ERROR
            })
    }
})

export const { fetchProduct } = ProductSlice.actions;
export default ProductSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const result = await res.json();
    return result;
})

// export function getProducts() {
//     return (
//         async function getProductThunk(dispatch, getState) {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const products = await res.json();
//             dispatch(fetchProduct(products))
//         }
//     )
// }