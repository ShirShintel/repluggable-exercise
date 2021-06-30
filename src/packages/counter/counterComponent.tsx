import React, { FunctionComponent } from 'react';
import './counterComponent.css';

export const CounterView: FunctionComponent = () => (
    <div className="container">
        <div className="counterView">
            0
        </div>
    </div>
);

export const CounterButtons: FunctionComponent = () => (
    <div className="container">
        <button>-</button>
        <button>+</button>
    </div>
);