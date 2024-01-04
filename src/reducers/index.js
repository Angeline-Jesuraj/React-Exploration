import { combineReducers } from 'redux';

const exampleReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
