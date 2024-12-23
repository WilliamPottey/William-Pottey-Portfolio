import { Component } from "react";
import "./App.css";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";

class App extends Component {
  state = {
    page: "Home",
  };

  showHome = (page) => {
    if (page !== "Home") {
      return true;
    }
    return false;
  };

  render() {
    return (
      <>
        <Header page={this.state.page} />
        <About className="about" />
        <Projects />
        <footer>
          <div className="footer">
            <hr />
            Author: William Pottey <br />
            &copy; Copyright Reserved <br />
            Contact:{" "}
            <a href="mailto:Williampottey@gmail.com">Williampottey@gmail.com</a>
          </div>
          <hr />
        </footer>
        {/* <img src={myLogo} alt="" /> */}
      </>
    );
  }
}

export default App;
