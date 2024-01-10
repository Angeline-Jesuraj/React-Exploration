import {combineReducers } from 'redux';
import { cardData } from './reducer';
import { productData } from './productReducer';
import postReducer from '../saga/postReducer';
const rootReducerEg = combineReducers({
    cardData,
    productData,
    posts:postReducer,
    
  });
  export default rootReducerEg;