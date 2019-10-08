import React from "react";
import { NavLink } from "react-router-dom";
import useRouter from "../lib/UseRouter";

import logo from '../images/flipside-logo.svg';

const NavBar = () => {
    const {location} = useRouter();
    return (
        <div className="nav" data-uk-sticky="cls-active: uk-background-secondary uk-light; top: 5vh; animation: uk-animation-fade">
    		<div className="uk-container">
    			<nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
    				<div className="uk-navbar-left">
    					<div className="uk-navbar-item">
                            {location.pathname === '/' ?
                            <img src={logo} width="75px" alt="Flipside Logo" data-uk-image />
                            : <NavLink to={`/`}><img src={logo} width="75px" alt="Flipside Logo" data-uk-image /></NavLink>
                            }
    					</div>
    				</div>
                    {location.pathname !== '/contact' &&
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li>
                                <NavLink to={`/contact`}><span className="uk-icon uk-margin-small-right" data-uk-icon="icon: commenting; ratio: 0.85"></span> Contact</NavLink>
                            </li>
                        </ul>
    				</div>
                    }
                    {location.pathname !== '/' &&
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li>
                                <NavLink to={`/`}>
                                    <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: home; ratio: 0.85"></span> Home</NavLink>
                            </li>
                        </ul>
    				</div>
                    }
    			</nav>
    		</div>
    	</div>
    )
}

export default NavBar;
