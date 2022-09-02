import './Background.css';
import React from "react"
import NavBar from './NavBar';
function Background({children}){
    return(
        <div className='Background'>
            <NavBar></NavBar>
            {children}
        </div>
    );
}
export default Background;