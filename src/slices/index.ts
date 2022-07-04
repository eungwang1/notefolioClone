import { INotefolioSlice } from "./../customTypes/notefolio";
import { CombinedState, combineReducers, PayloadAction } from "@reduxjs/toolkit";
import notefolioSlice from "./notefolioSlice";
import { HYDRATE } from "next-redux-wrapper";
interface IRootState {
  notefolioSlice: INotefolioSlice;
}

type TCombinedState = CombinedState<IRootState> | undefined;

const rootReducer = (state: TCombinedState, action: PayloadAction<IRootState>): CombinedState<IRootState> => {
  switch (action.type) {
    // HYDRATE : SSR 때문에 설정.
    case HYDRATE: {
      return action.payload;
    }
    default: {
      const combineReducer = combineReducers({
        notefolioSlice,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
