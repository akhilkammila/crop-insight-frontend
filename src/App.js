import React, {useState} from "react"
import { BrowserRouter as Router, Switch, 
  Route, Redirect, Routes} from "react-router-dom";

import Home from './Home';
import Analysis from "./Analysis";
import Other from "./Other";
function App() {
  const [text, setText] = useState("");
  const handleSubmit = (event)=> {
    event.preventDefault();
    setText(event.target[0].value);
  };


  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/analysis" element={<Analysis/>}/>
          <Route path="/Other" element={<Other/>}/>

        </Routes>
      </Router>

  );
}

export default App;
