import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/about'>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/people'>Staff</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Peterson Painting</h1>
                                <p>Servicing the High and Low deserts, for all your painting needs. Interior and exterior, for commercial and residential.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default Header;