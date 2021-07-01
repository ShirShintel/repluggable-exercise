import { ExtensionSlot, ReactComponentContributor } from "repluggable";
import { FunctionComponent } from "react";

export interface ContributedComponent {
  component: ReactComponentContributor;
}

export type ComponentWithSlot = FunctionComponent<{
  slot: ExtensionSlot<ContributedComponent>;
}>;
