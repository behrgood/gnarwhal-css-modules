import React, { Component } from "react";
import "./App.scss";
import Gnarwhal from "./components/Gnarwhal";
import Button from "./components/Button";

class App extends Component {
  state = { isHappy: false };

  setHappy = bool => {
    this.setState({ isHappy: bool });
  };

  render() {
    const { isHappy } = this.state;

    return (
      <div className="wrap">
        <Gnarwhal isHappy={isHappy} />
        <Button
          onButtonClick={() => this.setHappy(true)}
          buttonText="🙂"
          buttonType="primary"
        />
        <Button
          onButtonClick={() => this.setHappy(false)}
          buttonText="☹️"
          buttonType="secondary"
        />
      </div>
    );
  }
}

export default App;
