import { EntryPoint } from 'repluggable';
import { CounterView , CounterButtons } from './counterComponent';
import { MainViewAPI } from "../mainView";

export const CounterPackage: EntryPoint[] = [{
    name: 'Counter',

    getDependencyAPIs() {
        return [MainViewAPI];
    },

    extend(shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <CounterView/>});
    }
}];