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
        
        this.state ={
            server: true
        }        
    }

    componentDidMount() {
        const curUrl = window.location.href;

        if(!curUrl.includes(baseUrl))
            this.setState({server: false});
    } 

    render() {
        console.log(this.state.server)
        return (
            <Router>
                <div className="main">
                    <div className="container">
                        <Navbar color="faded" light expand="md">
                            <NavbarBrand className="background-drop-nav" href={this.state.server ? baseUrl + '/' : '/'}>
                                <img src={require('../../dist/img/logo.png')} />
                            </NavbarBrand>
                            <Nav navbar>
                                <div className="navbar-menu"> 
                                    <NavItem>
                                        <NavLink tag={Link} to={this.state.server ? baseUrl + '/' : '/'}>
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to={this.state.server ? baseUrl + '/product' : '/product'}>
                                            Product
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to={this.state.server ? baseUrl + '/about' : '/about'}>
                                            About
                                        </NavLink>
                                    </NavItem>                      
                                    <NavItem>
                                        <NavLink tag={Link} to={this.state.server ? baseUrl + '/tutorial' : '/tutorial'}>
                                            Tutorial
                                        </NavLink>
                                    </NavItem>                          
                                    <NavItem>
                                        <NavLink tag={Link} to={this.state.server ? baseUrl + '/contact' : '/contact'}>
                                            Contact
                                        </NavLink>
                                    </NavItem>                                        
                                </div>
                            </Nav>                          
                        </Navbar>
                    </div>

                    <Route
                        exact
                        path={this.state.server ? baseUrl + '/' : '/'}
                        render={() => (
                            <Home/>
                        )}
                    />
                    <Route
                        exact
                        path={this.state.server ? baseUrl + '/product' : '/product'}
                        render={() => (
                            <Product/>
                        )}
                    />
                    <Route
                        exact
                        path={this.state.server ? baseUrl + '/about' : '/about'}
                        render={() => (
                            <About/>
                        )}
                    />
                    <Route
                        exact
                        path={this.state.server ? baseUrl + '/tutorial' : '/tutorial'}
                        render={() => (
                            <Tutorial/>
                        )}
                    />
                    <Route
                        exact
                        path={this.state.server ? baseUrl + '/contact' : '/contact'}
                        render={() => (
                            <Contact/>
                        )}
                    />
                                                                                                    
                    <footer>
                        <ul>
                            <li>
                                <NavLink to={this.state.server ? baseUrl + '/' : '/'} style={{ textDecoration: 'none'}}>
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
