import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import NavBar from "./containers/Navigation";

import * as serviceWorker from "./serviceWorker";

render (
    <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <App />
    </Router>, document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();