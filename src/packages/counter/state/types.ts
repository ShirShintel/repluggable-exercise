export interface CounterState {
    count: number
}

export interface CounterSelectors {
    getCount: () => number;
}

export interface CounterScopedState {
    counter: CounterState
}