import { EntryPoint } from 'repluggable';
import { CounterAPI, createCounterAPI } from "../counterAPI";
import { CounterScopedState } from '../state/counterSelectors';
import { CounterReducer } from '../state/counterReducer'

export const CounterDataEntryPoint: EntryPoint = {
    name: 'Counter Data Entry Point',

    // getDependencyAPIs() {
    //     return [MainViewAPI,TopBarAPI];
    // },

    declareAPIs() {
        return [CounterAPI]
    },

    attach(shell) {
        shell.contributeState<CounterScopedState>(() => ({
            counter: CounterReducer
        }));

        shell.contributeAPI(CounterAPI, () => createCounterAPI(shell))
    }
};



