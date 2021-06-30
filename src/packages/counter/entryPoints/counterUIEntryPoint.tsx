import { EntryPoint } from 'repluggable';
import { Displayer } from '../components/pure/displayer';
import { Controls } from '../components/pure/controls'
import { MainViewAPI } from "../../mainView";
import { TopBarAPI } from '../../topBar/topBarAPI';

export const CounterUIEntryPoint: EntryPoint = {
    name: 'Counter UI Entry Point',

    getDependencyAPIs() {
        return [MainViewAPI,TopBarAPI];
    },

    extend(shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <Displayer/>});
        shell.getAPI(TopBarAPI).contributeComponent(shell, {component: () => <Controls/>});
    }
};



