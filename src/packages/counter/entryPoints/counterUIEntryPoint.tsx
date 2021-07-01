import { EntryPoint } from "repluggable";
import { MainViewAPI } from "../../mainView";
import { TopBarAPI } from "../../topBar/topBarAPI";
import { CounterAPI } from "../counterAPI";
import { createConnectedDisplayer } from "../components/connected/displayer";
import { createConnectedControls } from "../components/connected/controls";

export const CounterUIEntryPoint: EntryPoint = {
  name: "Counter UI Entry Point",

  getDependencyAPIs() {
    return [MainViewAPI, TopBarAPI, CounterAPI];
  },

  extend(shell) {
    const mainViewAPI = shell.getAPI(MainViewAPI);
    const topBarAPI = shell.getAPI(TopBarAPI);

    const Displayer = createConnectedDisplayer(shell);
    const Controls = createConnectedControls(shell);

    mainViewAPI.contributeComponent(shell, { component: () => <Displayer /> });
    topBarAPI.contributeComponent(shell, { component: () => <Controls /> });
  },
};
