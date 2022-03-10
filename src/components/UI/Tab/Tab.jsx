import React from "react";
import styles from "./Tab.module.scss";

function Tab({ count, children }) {
  return (
    <li className={styles.tab}>
      <span className={styles.tabCount}>{count}</span>
      <h3 className={styles.tabValue}>{children}</h3>
    </li>
  );
}

export default Tab;
