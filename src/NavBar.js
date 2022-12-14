import React from "react"
import './NavBar.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function NavBar(){
    return(
        <h1 className="NavBar">
            <h1 className="name">
                IntelliFarm
            </h1>
            <Link to="/">
                <button id = "Homebutton">
                    Home
                </button>
            </Link>
            <Link to="/analysis">
                <button id = "Homebutton">
                    Yield Analysis
                </button>
            </Link>
        </h1>
    );
}

export default NavBar;