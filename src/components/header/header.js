import React from "react";

import './header.scss';
import logo from './../../assets/images/logo.png';

import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";


export default function Header() {
    return (
        <div className="header">
            {/* Header Content */}
            <div className="header-content">
                <div className="left">
                    <img className="logo" src={logo}></img>

                </div>
                <div className="right">
                    <ul className="links">
                        <li>
                            <NavLink activeClassName='is-active' to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='is-active' to="/stores">Stores</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='is-active' to="/gallery">Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='is-active' to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Header Content Ends */}
        </div>
    );
}
