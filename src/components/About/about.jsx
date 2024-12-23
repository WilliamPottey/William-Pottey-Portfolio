import React from "react";
import myLogo from "./images/Will_Pottey.png";
import "./about.css";
import { Card } from "react-bootstrap";

const about = () => {
  return (
    <div className="background">
      <span className="about">
        <h1 className="display-5 fw-bold mb-5 mt-5" id="whiteText">
          About Me
        </h1>
        <img className="myFace" src={myLogo} />
        <span>
          <div className="aboutDesc" id="whiteText">
            For as long as I can remember, I've been passionate about computers
            and Software Development. I graduated from the University of
            Massachusetts, Amherst with a B.S. in Computational Mathematics. I
            have been writing code since 2018, and have been professionally
            developing since 2022. I have experience with Java, Python,
            JavaScript, CSS, HTML, and PostgreSQL.
          </div>
        </span>
      </span>
      <hr />
    </div>
  );
};

export default about;
