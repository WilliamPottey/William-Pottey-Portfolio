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
          <div className="projDesc">
            Below is a link to my Github where you can view the source code.
          </div>
          <a
            href="https://github.com/WilliamPottey/William-Pottey-Portfolio"
            id="gitHubButton"
            target="_blank"
          >
            <button className="btn btn-primary btn-outline-light btn-lg">
              GitHub
            </button>
          </a>
        </div>
        <div className="projectBox" id="nextProject">
          <div> Next Project TBD!</div>
        </div>
        {/* <div className="projectBox"></div>
        <div className="projectBox"></div>
        <div className="projectBox"></div> */}
      </section>
    </div>
  );
};

export default Projects;
