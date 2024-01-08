import { takeLatest, put, call } from 'redux-saga/effects';
import {
  FETCH_USER_REQUEST,
  fetchUserSuccess,
  fetchUserFailure,
} from '../actions/index';

const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve({ id: 1, name: 'John Doe' });
      } else {
        reject('Error fetching user');
      }
    }, 1000);
  });
};

function* fetchUserSaga() {
  try {
    const user = yield call(apiCall);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* rootSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
}
