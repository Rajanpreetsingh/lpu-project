import {
    DO_USER,
    DO_USER_SUCCESS,
    DO_USER_ERROR,
    INIT, LOADING, SUCCESS, ERROR,
  } from './constants';

const initialState = {
    user: null,
    phase: INIT,
    error: null,
  };
  
  export const userStore = (state = initialState, action) => {
    switch (action.type) {
      case DO_USER:
        return {
          ...state,
          phase: SUCCESS,
          error:null,
          user: action.payload
        };
        case DO_USER_ERROR:
        return {
          ...state,
          phase: ERROR,
          error: action.payload,
          user:null
        }
      default: {
        return state;
      }
    }
  };