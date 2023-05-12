import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import counterReducer from "./features/counter"
import allProductsReducer from "./features/products"
import statusReducer from "./features/status"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    counter: counterReducer,
    allProducts: allProductsReducer,
    status: statusReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
