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
    <div className="background-about">
      <div className="page-margin-top">
        <h1 className="display-5 fw-bold mb-3 about-header">About Me</h1>
        <span className="about">
          <div className="about-flex-col">
            <img className="myFace" src={myLogo} />
            <div className="about-flex-row">
              <div className="aboutDesc">
                For as long as I can remember, I've been passionate about
                computers and Software Development. I graduated from the
                University of Massachusetts, Amherst with a B.S. in
                Computational Mathematics. I have been writing code since 2018,
                and have been professionally developing since 2022. I have
                experience with Java, Python, JavaScript, CSS, HTML, and
                PostgreSQL, along with Proprietary Programming Languages I've
                used in my professional work.
              </div>
              <div className="hidden-overflow">
                <div className="logo-group">
                  <img
                    id="java-logo"
                    className="code-logo-1 logo-animation-1 image_wrap_test"
                    src={javaLogo}
                    title="Java"
                  />
                  <img
                    id="java-logo"
                    className="code-logo-1 logo-animation-1 image_wrap_test"
                    src={pythonLogo}
                    title="Python"
                  />
                  <img
                    className="code-logo-2 logo-animation-1 image_wrap_test"
                    src={cssLogo}
                    title="CSS"
                  />
                  <img
                    className="code-logo-2 logo-animation-1 image_wrap_test"
                    src={htmlLogo}
                    title="HTML"
                  />
                  <img
                    className="code-logo-2 logo-animation-1 image_wrap_test"
                    src={jsLogo}
                    title="JavaScript"
                  />
                  <img
                    className="code-logo-1 logo-animation-1 image_wrap_test"
                    src={postgresLogo}
                    title="PostgreSQL"
                  />
                  <img
                    className="code-logo-1 logo-animation-1 image_wrap_test"
                    src={reactLogo}
                    title="React.js"
                  />
                </div>
                <div className="logo-group">
                  <img
                    id="java-logo"
                    className="code-logo-1 logo-animation-1 image_wrap_test"
                    src={javaLogo}
                    title="Java"
                  />
                  <img
                    id="java-logo"
                    className="code-logo-1 logo-animation-1 image_wrap_test"
                    src={pythonLogo}
                    title="Python"
                  />
                  <img
                    className="code-logo-2 logo-animation-1 image_wrap_test"
                    src={cssLogo}
                    title="CSS"
                  />
                  <img
                    className="code-logo-2 logo-animation-1 image_wrap_test"
                    src={htmlLogo}
                    title="HTML"
                  />
                  <img
                    className="code-logo-2 logo-animation-1 image_wrap_test"
                    src={jsLogo}
                    title="JavaScript"
                  />
                  <img
                    className="code-logo-1 logo-animation-1 image_wrap_test"
                    src={postgresLogo}
                    title="PostgreSQL"
                  />
                  <img
                    className="code-logo-1 logo-animation-1 image_wrap_test"
                    src={reactLogo}
                    title="React.js"
                  />
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
      <hr />
    </div>
  );
};

export default about;
