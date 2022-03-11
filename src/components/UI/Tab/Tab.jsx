import React from "react";
import styles from "./Tab.module.scss";

function Tab({ id, classes, children, handleClick }) {
  return (
    <li className={`${styles.tab} ${classes}`} onClick={handleClick}>
      <span className={styles.tabID}>{id}</span>
      <h3 className={styles.tabValue}>{children}</h3>
    </li>
  );
}

export default Tab;
