
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./userSlice";
import { watchUserSagas } from "./userSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchUserSagas);

export default store;
