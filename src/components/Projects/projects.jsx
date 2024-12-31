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

// console.log(page);
// if (page === "Project 1") {
//   return (
//     <header>
//       <nav className="navbar fixed-top">
//         <div className="container-fluid">
//           <a className="navbar-brand">
//             William Pottey | B.S. Computational Mathematics
//           </a>
//           <a href="../../index.html">
//             <button className="btn btn-secondary home">Home</button>
//           </a>
//           <div className="dropdown">
//             <button
//               className="btn btn-secondary dropdown-toggle"
//               type="button"
//               id="project-dropdown"
//               data-bs-toggle="dropdown"
//             >
//               Projects
//             </button>
//             <ul className="dropdown-menu" aria-labelledby="project-dropdown">
//               <li>
//                 <a
//                   href="https://williampottey.github.io/React-Calculator-1/"
//                   onClick={() => window.location.reload()}
//                   className="dropdown-item"
//                 >
//                   Calculator
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <ul className="navbar-nav">
//             <a
//               className="nav-item"
//               href="https://www.linkedin.com/in/williampottey/"
//               target="_blank"
//             >
//               <img className="socials" src={linkedIn} width={35} />
//             </a>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }
