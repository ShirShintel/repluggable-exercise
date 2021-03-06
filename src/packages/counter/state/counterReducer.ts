import { AnyAction } from "redux";
import { initialState } from "./counterInitialState";
import { CounterState } from "./types";
import { INCREMENT, DECREMENT } from "./counterActions";

export const CounterReducer = (
  state = initialState,
  action: AnyAction
): CounterState => {
  const newCount = state.count;
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: newCount + 1 };
    case DECREMENT:
      return { ...state, count: newCount - 1 };
    default:
      return state;
  }
};
