import React from "react"
import Background from './Background.js';
import './Pages.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';


function Home(){
    return(
        <Background>
            <div id="page" className="Home">
                <div className="Message">
                    Welcome to IntelliFarm! The smart AI tool that optimizes crop production for rural development.
                </div>
                <div>
                <Link to="/analysis">
                    <button className="Start">
                        Start Now
                    </button>
                 </Link>
                </div>
            </div>
        </Background>
    )
}
export default Home