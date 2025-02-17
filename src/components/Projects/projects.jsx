import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./projects.css";

const Projects = () => {
  return (
    <div className="background-project">
      <div className="projSectionHeader">
        <h1 className="display-5 mt-3 mb-3 fw-bold">Personal Projects</h1>
      </div>
      <section className="container">
        <div className="projectBox proj-animation-1">
          <div className="projTitle">Portfolio Website</div>
          <div className="projDesc">
            This website you are currently on is a project I made. It required
            the use of HTML, CSS, Javascript, and React.js to accomplish.
          </div>
          <div className="projDesc">
            Below is a link to my Github where you can view the source code.
          </div>
          <div className="line"></div>
          <div className="flexButtons">
            <a
              href="https://github.com/WilliamPottey/William-Pottey-Portfolio"
              id="projButton"
              target="_blank"
            >
              <button className="button-back">
                {/* <span className="shadow"></span>
                <span className="edge"></span> */}
                <span id="clicked" className="button-front">
                  Github
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="projectBox proj-animation-1">
          <div className="projTitle">Doggy Match Maker</div>
          <div className="projDesc">
            I created a Dog Match Maker website where the user can select
            multiple dogs from a large dog API and be matched with a dog for
            adoption. This utilizes muliple POST and GET Fetch API calls to
            retrieve and manipluate the Dog Object data.
          </div>
          <div className="projDesc">
            You can also view the source code on my Github via the button below.
          </div>
          <div className="line"></div>
          <div className="flexButtons">
            <a
              href="https://williampottey.github.io/Doggy-Match-Maker"
              id="projButton"
              target="_blank"
            >
              <button className="button-back">
                {/* <span className="shadow"></span>
                <span className="edge"></span> */}
                <span id="clicked" className="button-front">
                  Match Maker
                </span>
              </button>
            </a>
            <a
              href="https://github.com/WilliamPottey/Doggy-Match-Maker"
              id="projButton"
              target="_blank"
            >
              <button className="button-back">
                {/* <span className="shadow"></span>
                <span className="edge"></span> */}
                <span id="clicked" className="button-front">
                  Github
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="projectBox proj-animation-1">
          <div className="projTitle">React Calculator</div>
          <div className="projDesc">
            Using HTML, CSS for styling, and Javascript + React.js, I built a
            Calculator App. This project mainly utilized React.js functional
            components to manipulate the values selected by the user.
          </div>
          <div className="projDesc">
            You can also view the source code on my Github via the button below.
          </div>
          <div className="line"></div>
          <div className="flexButtons">
            <a
              href="https://williampottey.github.io/React-Calculator-1/"
              id="projButton"
            >
              <button className="button-back">
                {/* <span className="shadow"></span>
                <span className="edge"></span> */}
                <span id="clicked" className="button-front">
                  Calculator
                </span>
              </button>
            </a>
            <a
              href="https://github.com/WilliamPottey/React-Calculator-1"
              id="projButton"
              target="_blank"
            >
              <button className="button-back">
                {/* <span className="shadow"></span>
                <span className="edge"></span> */}
                <span id="clicked" className="button-front">
                  Github
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="projectBox proj-animation-1">
          <div className="projTitle">Tic-Tac-Toe</div>
          <div className="projDesc">
            Using HTML, CSS, and Javascript + React.js, I built the game
            Tic-Tac-Toe. This project gave me more hands on experience with the
            use of Terniary Operators to conditionalize what the user sees on
            the screen, along with practice using tools like .map() and
            .filter().
          </div>
          <div className="projDesc">
            You can also view the source code on my Github via the button below.
          </div>
          <div className="line"></div>
          <div className="flexButtons">
            <a
              href="https://williampottey.github.io/tic-tac-toe/"
              id="projButton"
            >
              <button className="button-back">
                {/* <span className="shadow"></span>
                <span className="edge"></span> */}
                <span id="clicked" className="button-front">
                  Tic-Tac-Toe
                </span>
              </button>
            </a>
            <a
              href="https://github.com/WilliamPottey/tic-tac-toe"
              id="projButton"
              target="_blank"
            >
              <button className="button-back">
                {/* <span className="shadow"></span>
                <span className="edge"></span> */}
                <span id="clicked" className="button-front">
                  Github
                </span>
              </button>
            </a>
          </div>
        </div>
        {/* <div className="projectBox proj-animation-1" id="nextProject">
          <div> Next Project TBD!</div>
        </div> */}
        {/* <div className="projectBox"></div>
        <div className="projectBox"></div>
        <div className="projectBox"></div> */}
      </section>
    </div>
  );
};

export default Projects;
