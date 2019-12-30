import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

/**
 * @param {{ href: string, children: React.ReactNode[] }} props
 */
function Button({ href, children }) {
  return (
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
}

export default Button;
