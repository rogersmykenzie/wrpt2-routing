import React, { Component } from "react";
import { HashRouter } from 'react-router-dom';
import Nav from "./Components/Nav/Nav";
import routes from './routes';
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
