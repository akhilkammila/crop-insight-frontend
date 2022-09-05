import React, {useState} from "react"
import { BrowserRouter as Router, Switch, 
  Route, Redirect, Routes} from "react-router-dom";

import Home from './Home';
import Analysis from "./Analysis";
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
        </Routes>
      </Router>

  );
}

export default App;
