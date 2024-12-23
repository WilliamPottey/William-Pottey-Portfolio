import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./projects.css";

const Projects = () => {
  return (
    <div>
      <h1 className="display-5 fw-bold mb-5 mt-5 projTitle">
        Personal Projects
      </h1>
      <section className="container">
        <div className="projectBox">
          <div className="projDesc">
            This website you are currently on is a project I made. It required
            the use of HTML, CSS, Javascript, and React.js to accomplish.
          </div>
          <br />
          <div classname="projDesc">
            Below is a link to my Github where you can view the source code.
          </div>
          <a className="projButton">
            <button className="btn btn-secondary">test</button>
          </a>
        </div>
        <div className="projectBox"></div>
        <div className="projectBox"></div>
        <div className="projectBox"></div>
        <div className="projectBox"></div>
      </section>
    </div>
  );
};

export default Projects;
