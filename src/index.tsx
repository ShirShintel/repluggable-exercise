import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { createAppHost, AppMainView } from "repluggable";
import { MainViewPackage } from "./packages/mainView";
import { TopBarPackage } from "./packages/topBar";
import { CounterPackage } from "./packages/counter";

const host = createAppHost([MainViewPackage, TopBarPackage, CounterPackage]);

ReactDOM.render(<AppMainView host={host} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
