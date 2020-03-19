import React, { Component } from "react";

import "./header.scss";

import logo from './../../../assets/images/header-logo.png';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    // NavLink,
} from "reactstrap";
import {
    NavLink
} from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);

        // this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: false
        };
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const { collapsed } = this.state;

        let links = [
            {
                caption: "Home",
                to: "/"
            },
            // {
            //     caption: "Products",
            //     to: "/products"
            // },
            {
                caption: "Collaborate with Us",
                to: "/collaborate"
            },
            // {
            //     caption: 'Stores',
            //     to: '/stores'
            // },
            // {
            //     caption: 'Pottery Classes',
            //     to: '/pottery',
            //     new: true
            // },
            // {
            //     caption: 'Glimpse',
            //     to: '/gallery'
            // },
            {
                caption: "Contact",
                to: "/contact"
            }
        ];

        return (
            <div className="header">
                {/* Header Content */}
                <div className="header-content">
                    <Navbar color="light" light expand="md">
                        {/* <NavbarBrand href="/"> */}
                        <NavLink
                            to={"/"}
                            strict
                            activeClassName="is-active"
                        >
                            <img
                                alt="Athikkal Bricks"
                                className="logo"
                                src={logo}
                            ></img>
                        </NavLink>
                        {/* </NavbarBrand> */}
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <Collapse isOpen={collapsed} navbar>
                            <Nav className="ml-auto" navbar>
                                {links.map((link, key) => {
                                    return (
                                        <NavItem key={key}>
                                            <NavLink
                                                onClick={() => {
                                                    console.log("s");

                                                    this.setState({
                                                        collapsed: false
                                                    });
                                                }}
                                                to={link.to}
                                                strict
                                                activeClassName="is-active"
                                            >
                                                {link.caption}

                                                {link.new ? (
                                                    <span className="new">
                                                        new
													</span>
                                                ) : null}
                                            </NavLink>
                                        </NavItem>
                                    );
                                })}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                {/* Header Content Ends */}
            </div>
        );
    }
}
