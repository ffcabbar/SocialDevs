import { combineReducers } from "redux";
import posts from "./postReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    posts,
    apiCallsInProgress
});

export default rootReducer;
