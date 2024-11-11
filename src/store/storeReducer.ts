import { ActionTypes, State, Action } from "./types";

export const InitialState: State = {
  activeTab: "home",
};

export const storeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};
