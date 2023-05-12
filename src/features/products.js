import { createSlice } from "@reduxjs/toolkit"

const initialState = null

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    setProducts(state, { payload }) {
      return payload
    },
  },
})

export const { setProducts } = allProductsSlice.actions
export default allProductsSlice.reducer
