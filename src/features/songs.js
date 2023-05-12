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
export const requestFetchSongs = createAction("songs/requestFetchSongs")
export const requestAddSongs = createAction("songs/requestAddSongs")
export const requestUpdateSong = createAction("songs/requestUpdateSong")
export const requestDeleteSong = createAction("songs/requestDeleteSong")

export default songsSlice.reducer
