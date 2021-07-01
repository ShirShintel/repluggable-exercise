import { Controls } from "../pure/controls";
import { CounterAPI } from "../../counterAPI";
import { connectWithShell, Shell } from "repluggable";


interface ControlsDispatchProps {
    incrementCounter: () => void;
    decrementCounter: () => void;
}



const mapDispatchToProps = (shell:Shell): ControlsDispatchProps => {
    const counterAPI = shell.getAPI(CounterAPI);
    return {
        incrementCounter: () => counterAPI.incrementCounter(),
        decrementCounter: () => counterAPI.decrementCounter()
    };
};


export const createConnectedControls = (boundShell: Shell) => 
    connectWithShell<{},{},{},ControlsDispatchProps>(
        undefined,
        mapDispatchToProps,
        boundShell,
    )(Controls);