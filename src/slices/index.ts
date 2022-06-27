import { combineReducers } from "@reduxjs/toolkit";
import notefolioSlice from "./notefolioSlice";

const rootReducer = combineReducers({ notefolioSlice });

export default rootReducer;
