import { all, call, put, takeEvery } from "redux-saga/effects"
import { setError, toggleLoading } from "./features/status"
import songsService from "./services/songs"
import {
  requestAddSongs,
  requestDeleteSong,
  requestFetchSongs,
  requestUpdateSong,
  setSongs,
} from "./features/songs"

function* fetchSongs() {
  try {
    yield put(toggleLoading())
    const data = yield call(songsService.fetchSongs)
    yield put(setSongs(data))
    yield put(toggleLoading())
  } catch (error) {
    yield put(setError(error.message))
  }
}

function* addSong({ payload }) {
  try {
    yield call(songsService.addSong, payload)
  } catch (error) {
    yield put(setError(error.message))
  }
}

function* updateSong({ payload: { id, data } }) {
  try {
    yield call(songsService.updateSong, id, data)
  } catch (error) {
    yield put(setError(error.message))
  }
}

function* deleteSong({ payload }) {
  try {
    yield call(songsService.deleteSong, payload)
    yield put(requestFetchSongs())
  } catch (error) {
    yield put(setError(error.message))
  }
}

export function* watchFetchSongs() {
  yield takeEvery(requestFetchSongs().type, fetchSongs)
}

export function* watchAddSong() {
  yield takeEvery(requestAddSongs().type, addSong)
}

export function* watchUpdateSong() {
  yield takeEvery(requestUpdateSong().type, updateSong)
}

export function* watchDeleteSong() {
  yield takeEvery(requestDeleteSong().type, deleteSong)
}

export default function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchAddSong(),
    watchDeleteSong(),
    watchUpdateSong(),
  ])
}
