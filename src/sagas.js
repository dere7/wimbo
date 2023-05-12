import { all, call, put, takeEvery } from "redux-saga/effects"
import productsService from "./services/products"
import { setProducts } from "./features/products"
import { setError, toggleLoading } from "./features/status"

function* fetchProducts() {
  try {
    yield put(toggleLoading())
    const data = yield call(productsService.fetchProducts)
    yield put(setProducts(data))
    yield put(toggleLoading())
  } catch (error) {
    yield put(setError(error.message))
  }
}

export function* watchFetchProducts() {
  yield takeEvery(requestFetchProduct().type, fetchProducts)
}

export const requestFetchProduct = () => ({ type: "FETCH_PRODUCT_REQUESTED" })

export default function* rootSaga() {
  yield all([watchFetchProducts()])
}
