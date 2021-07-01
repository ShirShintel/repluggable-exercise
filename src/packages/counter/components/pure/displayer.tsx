import React, { FunctionComponent } from 'react';
import './counterComponent.css';


interface Props {
    count: number
}


export const Displayer: FunctionComponent<Props> = (props) => (
    <div className="container">
        <div className="displayer">
            {props.count}
        </div>
    </div>
);