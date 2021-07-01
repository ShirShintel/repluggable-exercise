import React, { FunctionComponent } from 'react';
import './counterComponent.css';

interface Props {
    incrementCounter: () => void;
    decrementCounter: () => void;
}

export const Controls: FunctionComponent<Props> = (props) => (
    <div className="container">
        <button onClick={props.decrementCounter}>-</button>
        <button onClick={props.incrementCounter}>+</button>
    </div>
);