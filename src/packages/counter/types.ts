export interface CounterAPI {
    incrementCounter: () => void,
    decrementCounter: () => void,
    getCount: () => number
}