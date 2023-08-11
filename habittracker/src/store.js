import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  habitCreateReducer,
  habitDeleteReducer,
  habitListReducer,
  habitUpdateReducer,
} from "./reducers/habitReducers"; 

import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  habitList: habitListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  habitCreate: habitCreateReducer,
  habitDelete: habitDeleteReducer,
  habitUpdate: habitUpdateReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
