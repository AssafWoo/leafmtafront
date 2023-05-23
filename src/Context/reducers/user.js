import { LightBlue, MainPink } from "../../Styles/colors";
import {
  LOAD_USER_SUCCESS,
  SET_USER,
  USER_LOGIN,
  LOAD_USER_FAILURE,
  PUT_USER,
  LOG_OUT_USER,
} from "../actions/user";
import { userInitialState } from "../initialState/user";

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_USER_FAILURE:
      return { error: action.payload };
    case LOAD_USER_SUCCESS:
      return { user: action.payload, error: null };
    case USER_LOGIN:
      const colors = [LightBlue, MainPink];
      function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      const randomColor = colors[randomIntFromInterval(0, 1)];
      localStorage.setItem("userColor", randomColor);
      localStorage.setItem("token", action.payload);

      return {
        ...state,
        loggedIn: true,
        authKey: action.payload,
      };
    case SET_USER:
      if (action.payload === undefined) return { ...state };
      localStorage.setItem("userName", action.payload.userName);
      localStorage.setItem("companyName", action.payload.companyName);
      return {
        ...state,
        userName: action.payload.userName,
        companyName: action.payload.companyName,
        companySize: action.payload.companySize,
        email: action.payload.email,
        totalTreesEq: action.payload.totalTreesEq,
        totalCO2: action.payload.totalCO2,
        transactions: action.payload.transactions,
        loggedIn: true,
      };
    case PUT_USER:
      return { user: action.payload, error: null };
    case LOG_OUT_USER:
      localStorage.clear();
      return {
        ...userInitialState,
      };
    default:
      return state;
  }
};

export default reducer;
