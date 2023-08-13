import {
    HABITS_UPDATE_REQUEST,
    HABITS_UPDATE_SUCCESS,
    HABITS_UPDATE_FAIL,
    HABITS_CREATE_FAIL,
    HABITS_CREATE_REQUEST,
    HABITS_CREATE_SUCCESS,
    HABITS_DELETE_FAIL,
    HABITS_DELETE_REQUEST,
    HABITS_DELETE_SUCCESS,
    HABITS_LIST_FAIL,
    HABITS_LIST_REQUEST,
    HABITS_LIST_SUCCESS,
  } from "../constants/habitConstants";
  
  export const habitListReducer = (state = { habits: [] }, action) => {
    switch (action.type) {
      case HABITS_LIST_SUCCESS:
        return { loading: false, habits: action.payload };
      case HABITS_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const habitCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case HABITS_CREATE_REQUEST:
        return { loading: true };
      case HABITS_CREATE_SUCCESS:
        return { loading: false, success: true };
      case HABITS_CREATE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export const habitDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case HABITS_DELETE_REQUEST:
        return { loading: true };
      case HABITS_DELETE_SUCCESS:
        return { loading: false, success: true };
      case HABITS_DELETE_FAIL:
        return { loading: false, error: action.payload, success: false };
  
      default:
        return state;
    }
  };
  
  export const habitUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case HABITS_UPDATE_REQUEST:
        return { loading: true };
      case HABITS_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case HABITS_UPDATE_FAIL:
        return { loading: false, error: action.payload, success: false };
      default:
        return state;
    }
  };