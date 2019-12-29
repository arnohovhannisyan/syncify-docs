import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

export default ({ href, children }) => (
  <a
    className={classnames(
      "button button--outline button--secondary button--lg",
      styles.button
    )}
    href={href}
    target="_blank"
    rel="noopener"
  >
    {children}
  </a>
);
