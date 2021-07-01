import { FunctionComponent } from "react";
import { ExtensionSlot, SlotRenderer } from "repluggable";
import { ContributedComponent } from "../types";

type MainViewComponent = FunctionComponent<{
  slot: ExtensionSlot<ContributedComponent>;
}>;

const slotItemToComp = ({ component }: ContributedComponent) => component;

export const MainViewComponent: MainViewComponent = ({ slot }) => (
  <div>
    <SlotRenderer slot={slot} mapFunc={slotItemToComp} />
  </div>
);
