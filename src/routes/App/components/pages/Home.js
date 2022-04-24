import React from "react";
import { DarkMode } from "../../../index";
import "../../styles/_app.scss";
import validator from "validator";

class Home extends React.Component {
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("dark-mode-details"));
    if (this.name && this.email && data) {
      this.name.value = data[0];
      this.email.value = data[1];
    }
  }
  saveData() {
    const name = document.getElementsByName("name")[0].value;
    const email = document.getElementsByName("email")[0].value;
    if (validator.isEmail(email)) {
      localStorage.setItem("dark-mode-details", JSON.stringify([name, email]));
    }
  }

  clearData() {
    localStorage.removeItem("dark-mode-details");
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("email")[0].value = "";
  }

  render() {
    return (
      <DarkMode.Consumer>
        {(context) => (
          <div className={context["0"] === "dark" ? "dark-mode app" : "app"}>
            <div className="column">
              <p>
                Lollipop powder powder. Cotton candy caramels chupa chups halvah
                muffin caramels apple pie topping cake. Topping chocolate bar
                pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing
                sugar plum. Chocolate bar lollipop candy canes. Biscuit
                croissant apple pie pudding caramels wafer tart tootsie roll
                macaroon. Croissant tiramisu chocolate bar carrot cake lemon
                drops halvah.
              </p>
            </div>
            <div className="column">
              <p>
                Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
                tart. Muffin chupa chups pie. Brownie apple pie topping lemon
                drops marzipan toffee. Pudding macaroon icing ice cream bonbon
                cake tart. Pudding sugar plum chocolate cake cake biscuit pastry
                pastry chocolate bar tart. Lemon drops dessert gummies icing.
              </p>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="name"
                  type="text"
                  placeholder="Name"
                  ref={(c) => (this.name = c)}
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  ref={(c) => (this.email = c)}
                />
              </div>
            </div>

            <section className="section">
              <div className="buttons level-right">
                <button className="button is-primary" onClick={this.saveData}>
                  Save
                </button>
                <button className="button is-link" onClick={this.clearData}>
                  Clear
                </button>
              </div>
            </section>
          </div>
        )}
      </DarkMode.Consumer>
    );
  }
}

export default Home;
