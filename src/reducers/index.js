<<<<<<< HEAD
import { combineReducers } from 'redux'
=======
import { combineReducers } from 'redux';
>>>>>>> 45aa7c993ea6e130c49c5355bf1487d9326f3b93

const exampleReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
<<<<<<< HEAD
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    // case 'INCREMENT_ASYNC':
    //   return { value: state.value + 1 };
    // case 'DECREMENT_ASYNC':
    //   return { value: state.value - 1 };
    default:
      return state
  }
}

const rootReducer = combineReducers({
  example: exampleReducer,
})

export default rootReducer
=======
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
>>>>>>> 45aa7c993ea6e130c49c5355bf1487d9326f3b93
