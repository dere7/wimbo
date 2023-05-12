import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import songsReducer from "./features/songs"
import statusReducer from "./features/status"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    songs: songsReducer,
    status: statusReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
