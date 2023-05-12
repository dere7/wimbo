import { createAction, createSlice } from "@reduxjs/toolkit"

const songsSlice = createSlice({
  name: "songs",
  initialState: null,
  reducers: {
    setSongs(_, { payload }) {
      return payload
    },
  },
})

export const { setSongs } = songsSlice.actions
export const requestSongsFetch = createAction("songs/requestSongsFetch")
export default songsSlice.reducer
