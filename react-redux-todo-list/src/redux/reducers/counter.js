import { ADD_COUNTER, RESET_COUNTER, MINUS_COUNTER } from "../actions/actions.types";



const counter = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return state + 1 ;
    case RESET_COUNTER:
      return  state = 0 ;
    case MINUS_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
