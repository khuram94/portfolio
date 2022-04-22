
import React, { Component} from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { Hero } from "./Hero";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Hero />
      </div>
    );
  }
}

export default hot(module)(App);