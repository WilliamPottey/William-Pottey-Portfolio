import React from "react";
import myLogo from "./images/Will_Pottey.png";
import "./about.css";
import javaLogo from "./images/java_logo.png";
import pythonLogo from "./images/python_logo.png";
import jsLogo from "./images/js_logo.png";
import cssLogo from "./images/css_logo.png";
import htmlLogo from "./images/html_logo.png";
import postgresLogo from "./images/postgres_logo.png";
import reactLogo from "./images/react_logo.png";

const about = () => {
  return (
    <div className="background">
      <span className="about">
        <h1 className="display-5 fw-bold mb-5 mt-4" id="whiteText">
          About Me
        </h1>
        <div className="about-flex-col">
          <img className="myFace" src={myLogo} />
          <div className="about-flex-row">
            <div className="aboutDesc" id="whiteText">
              For as long as I can remember, I've been passionate about
              computers and Software Development. I graduated from the
              University of Massachusetts, Amherst with a B.S. in Computational
              Mathematics. I have been writing code since 2018, and have been
              professionally developing since 2022. I have experience with Java,
              Python, JavaScript, CSS, HTML, and PostgreSQL, along with
              Proprietary Programming Languages I've used in my professional
              work.
            </div>
            <div id="code-logos">
              <img
                id="java-logo"
                className="code-logo-1"
                src={javaLogo}
                title="Java"
              />
              <img
                id="java-logo"
                className="code-logo-1"
                src={pythonLogo}
                title="Python"
              />
              {/* <img id="js-logo" className="code-logo" src={jsLogo} />
              <img className="code-logo" src={cssLogo} /> */}
              {/* <img id="jch-logos" src={testImage} /> */}
              <img className="code-logo-2" src={cssLogo} title="CSS" />
              <img className="code-logo-2" src={htmlLogo} title="HTML" />
              <img className="code-logo-2" src={jsLogo} title="JavaScript" />
              <img
                className="code-logo-1"
                src={postgresLogo}
                title="PostgreSQL"
              />
              <img className="code-logo-1" src={reactLogo} title="React.js" />
            </div>
          </div>
        </div>
      </span>
      <hr />
    </div>
  );
};

export default about;
