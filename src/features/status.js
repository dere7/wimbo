import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  loading: false,
  error: null,
}

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    toggleLoading(state) {
      state.loading = !state.loading
    },
    setError(state, { payload }) {
      state.error = payload
    },
  },
})

export const { setError, toggleLoading } = statusSlice.actions
export default statusSlice.reducer
