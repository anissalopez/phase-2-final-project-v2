import {
    HABITS_CREATE_FAIL,
    HABITS_CREATE_REQUEST,
    HABITS_CREATE_SUCCESS,
    HABITS_DELETE_FAIL,
    HABITS_DELETE_REQUEST,
    HABITS_DELETE_SUCCESS,
    HABITS_LIST_FAIL,
    HABITS_LIST_REQUEST,
    HABITS_LIST_SUCCESS,
    HABITS_UPDATE_FAIL,
    HABITS_UPDATE_REQUEST,
    HABITS_UPDATE_SUCCESS,
  } from "../constants/habitConstants"
  import axios from "axios";
  
  export const listHabits = () => async (dispatch, getState) => {
    try {
      dispatch({ type: HABITS_LIST_REQUEST });
        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
            Authorization: `Bearer ${userInfo.token}`,
            },
        };
  
        const { data } = await axios.get(`/data/habits`, config);

        dispatch({ type: HABITS_LIST_SUCCESS, payload: data});
    } 

    catch (error) {
        const message = 
            error.response && error.response.data.message
            ? error.response.data.message
           : error.message;
        dispatch({
            type: HABITS_LIST_FAIL,
            payload: message,
        });
      };
  };
  
  export const createHabitAction = (habitName, datesCompleted) => async (dispatch, getState) => {
    try {
      dispatch({
        type: HABITS_CREATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(`/data/habits/create`,
        { habitName, datesCompleted },
        config
      );
  
      dispatch({
        type: HABITS_CREATE_SUCCESS,
        payload: data,
      });
    } 
    catch (error) {
      console.log(error)
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: HABITS_CREATE_FAIL,
        payload: message,
      });
    }
  };
  
  export const deleteHabitAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: HABITS_DELETE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.delete(`/data/habits/${id}`, config);
      console.log(data)
  
      dispatch({
        type: HABITS_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: HABITS_DELETE_FAIL,
        payload: message,
      });
    }
  };
  
  export const updateHabitAction = (id, habitName, datesCompleted) => async (dispatch, getState
  ) => {
    try {
      dispatch({
        type: HABITS_UPDATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `/data/habits/${id}`,
        { habitName, datesCompleted },
        config
      );
  
      dispatch({
        type: HABITS_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: HABITS_UPDATE_FAIL,
        payload: message,
      });
    }
  };