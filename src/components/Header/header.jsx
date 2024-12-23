import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import linkedIn from "./images/linkedIn.png";
import "bootstrap/dist/js/bootstrap.js";

function test() {
  console.log("test function");
}

const header = ({ page }) => {
  console.log(page);
  if (page === "Project 1") {
    return (
      <header>
        <nav className="navbar fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand">
              William Pottey | B.S. Computational Mathematics
            </a>
            <a href="../../index.html">
              <button className="btn btn-secondary home">Home</button>
            </a>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="project-dropdown"
                data-bs-toggle="dropdown"
              >
                Projects
              </button>
              <ul className="dropdown-menu" aria-labelledby="project-dropdown">
                <li>
                  <a
                    href="#"
                    onClick={() => window.location.reload()}
                    className="dropdown-item"
                  >
                    Project 1
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <a
                className="nav-item"
                href="https://www.linkedin.com/in/williampottey/"
                target="_blank"
              >
                <img className="socials" src={linkedIn} width={35} />
              </a>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand">
            William Pottey | B.S. Computational Mathematics
          </a>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="project-dropdown"
              data-bs-toggle="dropdown"
            >
              Projects
            </button>
            <ul className="dropdown-menu" aria-labelledby="project-dropdown">
              <li>
                <a
                  href="./src/Project 1/project1.html"
                  className="dropdown-item"
                >
                  Project 1
                </a>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav">
            <a
              className="nav-item"
              href="https://www.linkedin.com/in/williampottey/"
              target="_blank"
            >
              <img className="socials" src={linkedIn} width={35} />
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default header;
