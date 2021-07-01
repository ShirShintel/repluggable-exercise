import { Displayer } from '../pure/displayer';
import { connectWithShell, Shell } from 'repluggable';
import { CounterAPI } from '../../counterAPI';




interface DisplayerStateProps {
    count: number;
}


const mapStateToProps = (shell:Shell): DisplayerStateProps => {
    return {
        count:shell.getAPI(CounterAPI).getCount()
    };
}


export const createConnectedDisplayer = (boundShell: Shell) => 
    connectWithShell<{}, {}, DisplayerStateProps, {}>(
        mapStateToProps,
        undefined,
        boundShell,
    )(Displayer);