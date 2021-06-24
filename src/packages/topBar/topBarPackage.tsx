import React from 'react';
import { EntryPoint } from 'repluggable';
import { TopBar } from './topBarComponent';
import { MainViewAPI } from "../mainView";

export const TopBarPackage: EntryPoint[] = [{
    name: 'TOP_BAR',

    getDependencyAPIs() {
        return [MainViewAPI];
    },

    extend(shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <TopBar/>});
    }
}];