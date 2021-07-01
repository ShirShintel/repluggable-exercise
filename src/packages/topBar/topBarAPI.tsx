import { Shell, SlotKey } from "repluggable";
import { ContributedComponent } from "../../types";

export interface TopBarAPI {
  contributeComponent(
    fromShell: Shell,
    contribution: ContributedComponent
  ): void;
}
export const TopBarAPI: SlotKey<TopBarAPI> = {
  name: "TopBar API",
  public: true,
};

export const componentsSlotKey: SlotKey<ContributedComponent> = {
  name: "contributedTopBarComponent",
};

export const createTopBarAPI = (shell: Shell): TopBarAPI => {
  const componentsSlot = shell.declareSlot(componentsSlotKey);

  return {
    contributeComponent(fromShell, contribution) {
      componentsSlot.contribute(fromShell, contribution);
    },
  };
};
