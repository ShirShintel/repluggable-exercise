import { Controls } from "../pure/controls";
import { CounterAPI } from "../../counterAPI";
import { connectWithShell, Shell } from "repluggable";
import { ControlsDispatchProps } from "./types";

const mapDispatchToProps = (shell: Shell): ControlsDispatchProps => {
  const counterAPI = shell.getAPI(CounterAPI);
  return {
    incrementCounter: () => counterAPI.incrementCounter(),
    decrementCounter: () => counterAPI.decrementCounter(),
  };
};

export const createConnectedControls = (boundShell: Shell) =>
  connectWithShell<{}, {}, {}, ControlsDispatchProps>(
    undefined,
    mapDispatchToProps,
    boundShell
  )(Controls);
