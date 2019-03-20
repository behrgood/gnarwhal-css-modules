import React, { Component } from "react";
import styles from "./styles.module.scss";

class Body extends Component {
  render() {
    return (
      <div>
        <div className={styles.spot} />
        <div className={styles.horn} />
        <div className={styles.tail} />
        <div className={styles.fin} />
      </div>
    );
  }
}

export default Body;
