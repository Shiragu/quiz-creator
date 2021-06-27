import { combineReducers } from "redux";
import authReducer from "./auth";
import quizReducer from "./quiz";
import createQuizReducer from "./quizcreate";

export default combineReducers({
  quiz: quizReducer,
  create: createQuizReducer,
  auth: authReducer,
});
