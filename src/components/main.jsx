// Import react 
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

// Import styles
import "../styles/App.scss";
import "../styles/fontello/css/fontello.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

// Import components
import About from "./dashboard/about.jsx";
import Contact from "./dashboard/contact.jsx";
import Home from "./dashboard/home.jsx";
import Product from "./dashboard/product.jsx";
import Tutorial from "./dashboard/tutorial.jsx";

// Base URL
const baseUrl = '/landing_page';

export default class Main extends React.Component {

    constructor(props) {
        super(props);           
    }

    render() {
        return (
            <Router>
                <div className="main">
                    <div className="container">
                        <Navbar color="faded" light expand="md">
                            <NavbarBrand className="background-drop-nav" href={baseUrl + '/'}>
                                <img src={require('../../dist/img/logo.png')} />
                            </NavbarBrand>
                            <Nav navbar>
                                <div className="navbar-menu"> 
                                    <NavItem>
                                        <NavLink tag={Link} to={baseUrl + '/'}>
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to={baseUrl + '/product'}>
                                            Product
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to={baseUrl + '/about'}>
                                            About
                                        </NavLink>
                                    </NavItem>                      
                                    <NavItem>
                                        <NavLink tag={Link} to={baseUrl + '/tutorial'}>
                                            Tutorial
                                        </NavLink>
                                    </NavItem>                          
                                    <NavItem>
                                        <NavLink tag={Link} to={baseUrl + '/contact'}>
                                            Contact
                                        </NavLink>
                                    </NavItem>                                        
                                </div>
                            </Nav>                          
                        </Navbar>
                    </div>

                    <Route
                        exact
                        path={baseUrl + '/'}
                        render={() => (
                            <Home/>
                        )}
                    />
                    <Route
                        exact
                        path={baseUrl + '/product'}
                        render={() => (
                            <Product/>
                        )}
                    />
                    <Route
                        exact
                        path={baseUrl + '/about'}
                        render={() => (
                            <About/>
                        )}
                    />
                    <Route
                        exact
                        path={baseUrl + '/tutorial'}
                        render={() => (
                            <Tutorial/>
                        )}
                    />
                    <Route
                        exact
                        path={baseUrl + '/contact'}
                        render={() => (
                            <Contact/>
                        )}
                    />
                                                                                                    
                    <footer>
                        <ul>
                            <li>
                                <NavLink to={baseUrl + '/'} style={{ textDecoration: 'none'}}>
                                    <img src={require('../../dist/img/logo.png')} />
                                </NavLink>
                            </li>
                            <li>
                                <h3>
                                    Sit. Healthy. Repeat.
                                </h3>
                            </li>
                        </ul>
                    </footer>                           
                </div>
            </Router>
        );
    }    
}
