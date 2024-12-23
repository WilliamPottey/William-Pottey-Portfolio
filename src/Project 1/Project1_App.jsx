import React, { Component } from "react";
import { useState } from "react";
import "./Project1_App.css";
import Header from "../components/Header/header";
import Project1_Body from "./components/Project1_Body";

class Project1_App extends Component {
  render() {
    return (
      <div>
        <a>
          <Header page={"Project 1"} />
        </a>

        <Project1_Body />
      </div>
    );
  }
}

export default Project1_App;
