import React from "react";
import styles from "./Tab.module.scss";
import MediaQuery from "react-responsive";

function Tab({ id, classes, children, handleClick }) {
  return (
    <>
      <MediaQuery minWidth={741}>
        <li className={`${styles.tabDesktop} ${classes}`} onClick={handleClick}>
          <span className={styles.tabID}>{id}</span>
          <h2 className={styles.tabValue}>{children}</h2>
        </li>
      </MediaQuery>
      <MediaQuery maxWidth={740}>
        <li className={`${styles.tabMobile} ${classes}`} onClick={handleClick}>
          <h2 className={styles.tabValue}>{children}</h2>
        </li>
      </MediaQuery>
    </>
  );
}

export default Tab;
