import { SlotRenderer } from "repluggable";
import { ComponentWithSlot, ContributedComponent } from "../types";

const slotItemToComp = ({ component }: ContributedComponent) => component;

export const MainViewComponent: ComponentWithSlot = ({ slot }) => (
  <div>
    <SlotRenderer slot={slot} mapFunc={slotItemToComp} />
  </div>
);
