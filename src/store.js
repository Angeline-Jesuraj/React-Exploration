import { configureStore } from '@reduxjs/toolkit';
import rootReducerEg from './components/redux/rootReducerEg';
import productSaga from './components/redux/productSaga';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './components/saga/postSaga';

const sagaMiddleWare = createSagaMiddleWare();
const store = configureStore({
  reducer: rootReducerEg,
  middleware:()=>[sagaMiddleWare]
 
});


sagaMiddleWare.run(productSaga,rootSaga)
export default store;
