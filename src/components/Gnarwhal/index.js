import React, { Component } from "react";
import styles from "./styles.module.scss";
// Components
import Face from "./Face";
import Body from "./Body";

class Gnarwhal extends Component {
  render() {
    return (
      <div className={styles.gnarwhal}>
        <Face {...this.props} />
        <Body {...this.props} />
      </div>
    );
  }
}

export default Gnarwhal;
