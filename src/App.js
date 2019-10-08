import React from "react";
import { Route, Switch } from "react-router-dom";
import {useTransition, animated} from "react-spring";
import useRouter from "./lib/UseRouter";

import Home from "./containers/Home";
import Contact from "./containers/Contact";

import './css/normalize.css';
import './css/Main.css';
import './css/App.css';

export default function App() {
    const {location} = useRouter();

	const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: 'translate3d(0, 80vh, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(0, -50vh, 0)' },
	});

    return transitions.map(({item, props, key}) => (
        <animated.div key={key} style={props}>
            <Switch location={item}>
                <Route path="/contact" component={(Contact)} />
                <Route path="/" component={(Home)} />
            </Switch>
        </animated.div>
    )
)}
//
// function App() {
//   return (
//     <>
//
//     </>
//   );
// }
//
// export default App;
