import { ReactComponentContributor, Shell, SlotKey } from 'repluggable';
import { CounterActions } from './state/counterActions';
import { CounterScopedState, createCounterSelectors } from './state/counterSelectors'

export interface CounterAPI {
    
}
export const CounterAPI: SlotKey<CounterAPI> = {
    name: 'Counter API',
    public: true,
};

export const createCounterAPI = (shell: Shell): CounterAPI => {
    
    const store = shell.getStore<CounterScopedState>();
    const selectors = createCounterSelectors(()=>store.getState());

    const incrementCounter = () => {
        shell.getStore().dispatch(CounterActions.incrementCounter());
    }

    const decrementCounter = () => {
        shell.getStore().dispatch(CounterActions.decrementCounter());
    }

    const getCount = () => {
        selectors.getCount();
    }


    return {
        incrementCounter,
        decrementCounter,
        getCount
    }
};