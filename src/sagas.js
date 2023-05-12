import { all, call, put, takeEvery } from "redux-saga/effects"
import { setError, toggleLoading } from "./features/status"
import songsService from "./services/songs"
import { setSongs } from "./features/songs"

function* fetchSongs() {
  console.log("hello saga")
  try {
    yield put(toggleLoading())
    const data = yield call(songsService.fetchSongs)
    yield put(setSongs(data))
    yield put(toggleLoading())
  } catch (error) {
    yield put(setError(error.message))
  }
}

export function* watchFetchSongs() {
  yield takeEvery(requestFetchSongs().type, fetchSongs)
}

export const requestFetchSongs = () => ({ type: "REQUEST_SONGS_FETCH" })

export default function* rootSaga() {
  yield all([watchFetchSongs()])
}
