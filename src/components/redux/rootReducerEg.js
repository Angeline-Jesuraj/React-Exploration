import {combineReducers } from 'redux';
import { cardData } from './reducer';
import { productData } from './productReducer';

const rootReducerEg = combineReducers({
    cardData,
    productData
  });
  export default rootReducerEg;