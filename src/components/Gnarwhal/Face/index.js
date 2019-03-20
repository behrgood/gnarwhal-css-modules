import React, { Component } from "react";
import { face, faceHappy, eyes, eyesHappy } from "./styles.module.scss";
// Components

class Gnarwhal extends Component {
  render() {
    const { isHappy } = this.props;

    return (
      <div className={isHappy ? faceHappy : face}>
        <div className={isHappy ? eyesHappy : eyes} />
        <div className={isHappy ? eyesHappy : eyes} />
      </div>
    );
  }
}

export default Gnarwhal;
