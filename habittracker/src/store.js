import { configureStore } from '@reduxjs/toolkit';
import { habitCreateReducer, habitDeleteReducer, habitListReducer, habitUpdateReducer} from "./reducers/habitReducers"; 
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";


const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};


const store = configureStore({
  reducer:{
    habitList: habitListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    habitCreate: habitCreateReducer,
    habitDelete: habitDeleteReducer,
    habitUpdate: habitUpdateReducer
  },
  initialState,
});

export default store;
