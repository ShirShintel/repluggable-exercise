import React, { FunctionComponent } from "react";
import "./counterComponent.css";
import { DisplayerProps } from "./types";

export const Displayer: FunctionComponent<DisplayerProps> = (props) => (
  <div className="container">
    <div className="displayer">{props.count}</div>
  </div>
);
