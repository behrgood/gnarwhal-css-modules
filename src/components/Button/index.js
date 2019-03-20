import React, { Component } from "react";
import styles from "./styles.module.scss";
// Components

class Button extends Component {
  render() {
    const { onButtonClick, buttonText, buttonType } = this.props;

    return (
      <button className={styles[buttonType]} onClick={onButtonClick}>
        {buttonText}
      </button>
    );
  }
}

export default Button;
