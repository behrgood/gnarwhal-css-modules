import React, { Component } from "react";
import styles from "./styles.module.scss";

class Body extends Component {
  render() {
    const { isHappy } = this.props;

    return (
      <div>
        <div className={styles.spot} />
        <div className={styles.horn} />
        <div className={isHappy ? styles.tailHappy : styles.tail} />
        <div className={styles.fin} />
      </div>
    );
  }
}

export default Body;
