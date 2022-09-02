import React from "react"
import { BrowserRouter as Router, Switch, 
  Route, Redirect, Routes} from "react-router-dom";

import Home from './Home';
import Analysis from "./Analysis";
import Other from "./Other";
function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/analysis" element={<Analysis/>}/>
          <Route path="/other" element={<Other/>}/>
        </Routes>
      </Router>

  );
}

export default App;
