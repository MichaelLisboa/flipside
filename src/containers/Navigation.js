import React from "react";
import { NavLink } from "react-router-dom";
import useRouter from "../lib/UseRouter";

import logo from '../images/flipside-logo.svg';

const NavBar = () => {
    const {location} = useRouter();
    return (
        <div className="nav" data-uk-sticky="cls-active: uk-background-secondary uk-light; top: 5vh; animation: uk-animation-fade">
    		<div className="uk-container uk-container-small">
    			<nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
    				<div className="uk-navbar-left">
    					<div className="uk-navbar-item">
                            {location.pathname === '/' ?
                            <img src={logo} width="150px" alt="Flipside Logo" data-uk-image />
                            : <NavLink to={`/`}><img src={logo} width="150px" alt="Flipside Logo" data-uk-image /></NavLink>
                            }
    					</div>
    				</div>
    			</nav>
    		</div>
    	</div>
    )
}

export default NavBar;
