import { ReactComponentContributor, Shell, SlotKey } from 'repluggable';

export interface MainViewAPI {
    contributeComponent(fromShell: Shell, contribution: ContributedComponent): void
}

export interface TopBarAPI {
    contributeComponent(fromShell: Shell, contribution: ContributedComponent): void
}

export interface ContributedComponent {
    component: ReactComponentContributor;
  }