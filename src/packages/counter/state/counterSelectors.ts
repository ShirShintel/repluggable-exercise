import { CounterState } from "./counterInitialState";


export interface CounterSelectors {
    getCount: () => number;
}

export interface CounterScopedState {
    counter: CounterState
}


export function createCounterSelectors(
    getState: () => CounterScopedState,
): CounterSelectors {
    const counterState = (): CounterState => getState().counter;
    return {
        getCount(){
            return counterState().count;
        }
    }
}
