import React, {Component } from 'react';
import "./css-src/App.scss";
import "./css-src/fontello/css/fontello.css";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    Link,
    NavLink,
    useParams,
    useRouteMatch,
    useLocation
  } from "react-router-dom";
// import { render } from 'sass';

const App = (props) => {
    return (
        <HashRouter>
            <NavDiv>
                <header>
                    <div className="background-drop-nav">
                        <img src={require('../dist/img/background_navbar.png')}></img>
                    </div>
                    <div className="container">
                        <ul className="logo-left">
                            <li><NavLink to="/" style={{ textDecoration: 'none' }}><img src={require('../dist/img/logo.png')} class="logo-htc"/></NavLink></li>
                        </ul>

                        <ul className="navbar-menu">
                            <li><NavLink to="/" style={{ textDecoration: 'none', color:'#fff'}}><h3>Home</h3></NavLink></li>
                            <li><NavLink to="/about" style={{ textDecoration: 'none', color:'#fff'}}><h3>About</h3></NavLink></li>
                        </ul>
                        
                </div>
                </header>
            </NavDiv>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/about" component={About}></Route>
            </Switch>
            <footer>
                <ul>
                    <li><NavLink to="/" style={{ textDecoration: 'none'}}><img src={require('../dist/img/logo.png')} class="logo-htc"/></NavLink></li>
                    <li><h3>Sit.Healthy.Repeat</h3></li>
                </ul>
            </footer>
        </HashRouter>
      )
}
const NavDiv = (props) => {

    const location = useLocation().pathname.replace('/','');
    return (
        <nav className={`nav-${location}`}>{props.children}</nav>
    )
}

export default App;


export function Main() {
    return(
    <main>
        <div className="background-drop-main">
            <img src={require('../dist/img/background_main.png')}></img>
            <div className="title">

                <div className="main-title">
                    <h1>For Your Eyes Protection</h1>
                    <div className="small-caption">
                        <h2>To remind you who are always on your computer</h2>
                    </div>
                </div>
                    
                <div className="monitor-pic">
                    <img src={require('../dist/img/monitor.png')}></img>
                </div>
                <div className="button-download">
                    <button><a href="https://github.com/ML-Team12/app/archive/refs/heads/main.zip">Try For Free</a></button>
                </div>
            </div>
        </div>
        <div className="product-section">
            <div className="product-title">
                <h2>PRODUCT</h2>
                <h1>MAIN FEATURES</h1>
            </div>
            <div className="product-features">
                <div className="features-block">
                    <div className="features-title">
                        <div className="number"><span>1</span></div>
                        <div className="name"><span>AUTO SCREEN BRIGHTNESS</span></div>
                    </div>
                    <div className="caption">
                        <span>
                            Posteye uses the data from the camera to automatically what is the ideal screen brightness setting for your eyes.
                        </span>
                    </div>
                </div>
                <div className="features-block">
                    <div className="features-title">
                        <div className="number"><span>2</span></div>
                        <div className="name"><span>BLINK DETECTION</span></div>
                    </div>
                    <div className="caption">
                        <span>
                        Posteye reminds you if you don’t blink on the average healthy rate.                        
                        </span>
                    </div>
                </div>
                <div className="features-block">
                    <div className="features-title">
                        <div className="number"><span>3</span></div>
                        <div className="name"><span>SLEEP DETECTION</span></div>
                    </div>
                    <div className="caption">
                        <span>
                        Posteye remind you when you fell asleep during your screentime.
                        </span>
                    </div>
                </div>

            </div>
        </div>
        
      </main>
    )
  
}


export function About(){
    return(
        <div className='about-page'>
                <h1>Team Members</h1>
            <div className='grid-photo'>
                <div className='profile-picture'>
                    <a href="https://github.com/jadenliu12" target="_blank"><img src={require('../dist/img/profile/jaden.jpg')}></img></a>
                    <h2>Jaden Liu</h2>
                    <h4>Computer Science Department</h4>
                </div>
                <div className='profile-picture'>
                    <a href="https://github.com/edoardodominikus" target="_blank"><img src={require('../dist/img/profile/edo.jpg')}></img></a>
                    <h2>Edoardo Dominikus</h2>
                    <h4>IBP Electrical Engineering Computer Science Department</h4>
                </div>
                <div className='profile-picture'>
                    <a href="https://github.com/bryanhartono" target="_blank"><img src={require('../dist/img/profile/bryan.jpg')}></img></a>
                    <h2>Bryan Hartono</h2>
                    <h4>IBP Electrical Engineering Computer Science Department</h4>
                </div>
                <div className='profile-picture'>
                    <a href="https://github.com/michellenovenda" target="_blank"><img src={require('../dist/img/profile/michelle.jpg')}></img></a>                    <h2>Michelle Novenda</h2>
                    <h4>Computer Science Department</h4>
                </div>
            </div>
        </div>  
    )
}

export function Tutorial(){
    return(
        <div>

        </div>
    )
}

