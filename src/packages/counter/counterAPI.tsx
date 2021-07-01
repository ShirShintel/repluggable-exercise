import { ReactComponentContributor, Shell, SlotKey } from 'repluggable';
import { CounterActions } from './state/counterActions';
import { CounterScopedState, createCounterSelectors } from './state/counterSelectors'

export interface CounterAPI {
    incrementCounter: () => void,
    decrementCounter: () => void,
    getCount: () => number
}


export const CounterAPI: SlotKey<CounterAPI> = {
    name: 'Counter API',
    public: true,
};

export const createCounterAPI = (shell: Shell): CounterAPI => {
    
    const store = shell.getStore<CounterScopedState>();
    const selectors = createCounterSelectors(()=>store.getState());

    const incrementCounter: CounterAPI['incrementCounter'] = () => {
        shell.getStore().dispatch(CounterActions.incrementCounter());
    }

    const decrementCounter: CounterAPI['decrementCounter'] = () => {
        shell.getStore().dispatch(CounterActions.decrementCounter());
    }

    const getCount: CounterAPI['getCount'] = () => 
        selectors.getCount();
    


    return {
        incrementCounter,
        decrementCounter,
        getCount
    };
};