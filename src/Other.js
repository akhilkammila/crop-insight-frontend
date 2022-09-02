import React, { useState } from "react"
import Background from './Background.js';
import './Pages.css';


function Other(){
    const [text, setText] = useState("");
    const handleSubmit = (event)=> {
        event.preventDefault();
        setText(event.target[0].value);
    };
    
    return (
        <Background>
        <div id = "page" className="Analysis">
            Hiii
        </div>
        </Background>
    
    );
}
export default Other