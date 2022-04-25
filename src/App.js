import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { Hero } from "./Hero";
import { WorkExperience } from "./WorkExperience";

class App extends Component {
  render() {
    return (
      <div
        style={{
          margin: "-10px 7.5%",
          background: "#F7F7F7",
          position: "relative",
          height: "105vh",
        }}
      >
        <Hero />
        <WorkExperience />
      </div>
    );
  }
}

export default hot(module)(App);
