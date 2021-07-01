import React from "react";
import { EntryPoint } from "repluggable";
import { TopBar } from "./topBarComponent";
import { MainViewAPI } from "../mainView";
import { TopBarAPI, createTopBarAPI, componentsSlotKey } from "./topBarAPI";

export const TopBarPackage: EntryPoint[] = [
  {
    name: "TOP_BAR",

    getDependencyAPIs() {
      return [MainViewAPI];
    },

    declareAPIs() {
      return [TopBarAPI];
    },

    attach(shell) {
      shell.contributeAPI(TopBarAPI, () => createTopBarAPI(shell));
    },

    extend(shell) {
      shell
        .getAPI(MainViewAPI)
        .contributeComponent(shell, {
          component: () => <TopBar slot={shell.getSlot(componentsSlotKey)} />,
        });
    },
  },
];
