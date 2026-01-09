import { all, call, put, takeLatest } from "redux-saga/effects";
import * as api from "../../common/urls";
import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUser,
  addUserSuccess,
  addUserFailure,
  deleteUser,
} from './slice';

function* fetchUsersSaga() {
  try {
    const users = yield call(api.getUsers);
    yield put(fetchUsersSuccess(users));
  } catch (e) {
    yield put(fetchUsersFailure(e.message));
  }
}

function* addUserSaga({ payload }) {
  try {
    const user = yield call(api.createUser, payload);
    yield put(addUserSuccess(user));
  } catch (e) {
    yield put(addUserFailure(e.message));
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(fetchUsers.type, fetchUsersSaga),
    takeLatest(addUser.type, addUserSaga),
    takeLatest(deleteUser.type, fetchUsersSaga),
  ]);
}
