import React from "react";
import { DarkMode } from "../../../index";

class About extends React.Component {
  constructor(props) {
    super(props);
    const data = JSON.parse(localStorage.getItem("dark-mode-details"));
    this.state = {
      name: data ? data[0] : "",
      email: data ? data[1] : ""
    };
  }

  render() {
    return (
      <DarkMode.Consumer>
        {(context) => (
          <div className={context["0"] === "dark" ? "dark-mode app" : "app"}>
            <p>Hello this is the about us page. Have a great day!</p>
            {this.state.name && <p>Here is your name {this.state.name}</p>}
            {this.state.email && <p>This is your {this.state.email}!</p>}
          </div>
        )}
      </DarkMode.Consumer>
    );
  }
}

export default About;
