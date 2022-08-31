import React from "react"
import Background from './Background.js';
import './Pages.css';

function Home(){
    return(
        <Background>
            <div id="page" className="Home">
                Welcome to "insert name here"
            </div>
        </Background>
    )
}
export default Home