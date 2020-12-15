import React from 'react';
import './App.css';
import { HashRouter } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <HashRouter>
      <div>
        <div className='App'></div>
        <nav className="nav">
          <div className="link-wrap">
            <div className="links">Auth</div>
            <div className="links">Dash</div>
            <div className="links">Post</div>
            <div className="links">Form</div>
          </div>
        </nav>
        {routes}
      </div>
    </HashRouter>
  )
}
;

export default App;
