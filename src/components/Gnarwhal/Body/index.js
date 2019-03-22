import React, { Component } from "react";
import styles from "./styles.module.scss";

class Body extends Component {
  render() {
    const tailClass = this.props.isHappy ? styles.tailHappy : styles.tail;

    return (
      <div>
        <div className={styles.spot} />
        <div className={styles.horn} />
        <div className={tailClass} />
        <div className={styles.fin} />
      </div>
    );
  }
}

export default Body;
