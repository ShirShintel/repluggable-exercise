import { EntryPoint } from 'repluggable';
import { CounterView , CounterButtons } from './counterComponent';
import { MainViewAPI } from "../mainView";
import { TopBarAPI } from '../topBar/topBarAPI';

export const CounterPackage: EntryPoint[] = [{
    name: 'Counter',

    getDependencyAPIs() {
        return [MainViewAPI,TopBarAPI];
    },

    extend(shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <CounterView/>});
        shell.getAPI(TopBarAPI).contributeComponent(shell, {component: () => <CounterButtons/>});
    }
}];



