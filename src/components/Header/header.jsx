import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import linkedIn from "./images/linkedIn.png";
import GitHub from "./images/github-logo.png";
import "bootstrap/dist/js/bootstrap.js";

function test() {
  console.log("test function");
}

const header = () => {
  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand">
            William Pottey | B.S. Computational Mathematics
          </a>

          <div className="dropdown">
            <button
              className=" button-back-1"
              type="button"
              id="project-dropdown"
              data-bs-toggle="dropdown"
            >
              <span id="clicked" className="button-front-1">
                Projects
              </span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="project-dropdown">
              <li>
                <a
                  href="https://williampottey.github.io/React-Calculator-1/"
                  className="dropdown-item"
                >
                  Calculator
                </a>
                <a
                  href="https://williampottey.github.io/tic-tac-toe/"
                  className="dropdown-item"
                >
                  Tic-Tac-Toe
                </a>
              </li>
            </ul>
          </div>
          <a
            className="nav-item"
            id="socialMediaButtons"
            href="https://github.com/WilliamPottey"
            target="_blank"
          >
            <img
              className="socials socMedia-animation-1"
              src={GitHub}
              width={35}
              title="Github"
            />
          </a>
          <a
            className="nav-item"
            href="https://www.linkedin.com/in/williampottey/"
            target="_blank"
          >
            <img
              className="socials socMedia-animation-1"
              src={linkedIn}
              width={35}
              title="LinkedIn"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default header;
