import React, { Component } from "react";
import { fin, horn, spot, tail, tailHappy } from "./styles.module.scss";

class Body extends Component {
  render() {
    const tailClass = this.props.isHappy ? tailHappy : tail;

    return (
      <div>
        <div className={spot} />
        <div className={horn} />
        <div className={tailClass} />
        <div className={fin} />
      </div>
    );
  }
}

export default Body;
