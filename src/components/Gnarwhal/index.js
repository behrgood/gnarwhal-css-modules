import React, { Component } from "react";
import styles from "./styles.module.scss";
// Components
import Face from "./Face";
import Body from "./Body";

class Gnarwhal extends Component {
  render() {
    const { isHappy } = this.props;

    return (
      <div className={styles.gnarwhal}>
        <Face isHappy={isHappy} />
        <Body />
      </div>
    );
  }
}

export default Gnarwhal;
