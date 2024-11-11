export interface State {
  activeTab: string;
}

export enum ActionTypes {
  SET_ACTIVE_TAB = "SET_ACTIVE_TAB",
}

export type Action = { type: ActionTypes.SET_ACTIVE_TAB; payload: string };
