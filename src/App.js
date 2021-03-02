import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';  
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < Navbar />
        <Switch>
            <Route exact path="/"
              component={Home} />
            <Route path="/about"
              component={About} />
          </Switch>
        < Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
