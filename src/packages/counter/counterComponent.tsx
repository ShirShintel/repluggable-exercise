import React, { FunctionComponent } from 'react';
import './counterComponent.css';

export const CounterView: FunctionComponent = () => (
    <div className="counterView">
        count will be shown here
    </div>
);

export const CounterButtons: FunctionComponent = () => (
    <div >
        <button>+</button>
        <button>-</button>
    </div>
);