<<<<<<< HEAD
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchDecrementAsync, watchIncrementAsync } from "./src/sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchIncrementAsync);
sagaMiddleware.run(watchDecrementAsync);

=======
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/reducers';

const store = configureStore({
  reducer: rootReducer,
});

>>>>>>> 45aa7c993ea6e130c49c5355bf1487d9326f3b93
export default store;
