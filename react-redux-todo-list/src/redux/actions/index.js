import {
  ADD_COUNTER,
  RESET_COUNTER,
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO,
  MINUS_COUNTER
} from "./actions.types";

// let count = 0;

export const addCounter = () => {
  return {
    type: ADD_COUNTER,
  };
};
export const minusCounter = () => {
  return {
    type: MINUS_COUNTER,
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER,
  };
};

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
