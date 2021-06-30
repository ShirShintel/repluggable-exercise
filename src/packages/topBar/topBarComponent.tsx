import React, { FunctionComponent } from 'react';
import './topBarComponent.css';
import { ExtensionSlot, SlotRenderer } from "repluggable";
import { ContributedComponent } from "../../types";

type TopBarComponent = FunctionComponent<{slot: ExtensionSlot<ContributedComponent>}>

const slotItemToComp = ({component}: ContributedComponent) => component


export const TopBar: TopBarComponent = ({slot}) => (
    <div className="topbar">
         <SlotRenderer slot={slot} mapFunc={slotItemToComp} />
    </div>
);