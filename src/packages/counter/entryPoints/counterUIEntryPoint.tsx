import { EntryPoint } from 'repluggable';
import { CounterView , CounterButtons } from '../counterComponent';
import { MainViewAPI } from "../../mainView";
import { TopBarAPI } from '../../topBar/topBarAPI';

export const CounterUIEntryPoint: EntryPoint = {
    name: 'Counter UI Entry Point',

    getDependencyAPIs() {
        return [MainViewAPI,TopBarAPI];
    },

    extend(shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <CounterView/>});
        shell.getAPI(TopBarAPI).contributeComponent(shell, {component: () => <CounterButtons/>});
    }
};



