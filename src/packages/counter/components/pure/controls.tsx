import { FunctionComponent } from "react";
import "./counterComponent.css";
import { ControlsProps } from "./types";

export const Controls: FunctionComponent<ControlsProps> = (props) => (
  <div className="container">
    <button onClick={props.decrementCounter}>-</button>
    <button onClick={props.incrementCounter}>+</button>
  </div>
);
