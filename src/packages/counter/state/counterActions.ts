import { AnyAction } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface CounterActions {
  incrementCounter: () => AnyAction;
  decrementCounter: () => AnyAction;
}

export const CounterActions: CounterActions = {
  incrementCounter: (): AnyAction => ({
    type: INCREMENT,
  }),
  decrementCounter: (): AnyAction => ({
    type: DECREMENT,
  }),
};
