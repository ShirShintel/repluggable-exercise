import "./topBarComponent.css";
import { SlotRenderer } from "repluggable";
import { ComponentWithSlot, ContributedComponent } from "../types";

const slotItemToComp = ({ component }: ContributedComponent) => component;

export const TopBar: ComponentWithSlot = ({ slot }) => (
  <div className="topbar">
    <SlotRenderer slot={slot} mapFunc={slotItemToComp} />
  </div>
);
