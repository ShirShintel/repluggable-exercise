import { EntryPoint } from "repluggable";
import { CounterAPI, createCounterAPI } from "../counterAPI";
import { CounterScopedState } from "../state/types";
import { CounterReducer } from "../state/counterReducer";

export const CounterDataEntryPoint: EntryPoint = {
  name: "Counter Data Entry Point",

  declareAPIs() {
    return [CounterAPI];
  },

  attach(shell) {
    shell.contributeState<CounterScopedState>(() => ({
      counter: CounterReducer,
    }));

    shell.contributeAPI(CounterAPI, () => createCounterAPI(shell));
  },
};
