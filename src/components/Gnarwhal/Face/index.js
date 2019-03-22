// Lib
import React, { Component } from "react";
import classNames from "classnames/bind";
// Local
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

class Gnarwhal extends Component {
  render() {
    const { isHappy } = this.props;
    const faceClass = cx({ face: true, faceHappy: isHappy });
    const eyesClass = cx({ eyes: true, eyesHappy: isHappy });

    return (
      <div className={faceClass}>
        <div className={eyesClass} />
        <div className={eyesClass} />
      </div>
    );
  }
}

export default Gnarwhal;
