import { CounterState, CounterScopedState, CounterSelectors } from "./types";

export function createCounterSelectors(
  getState: () => CounterScopedState
): CounterSelectors {
  const counterState = (): CounterState => getState().counter;
  return {
    getCount() {
      return counterState().count;
    },
  };
}
