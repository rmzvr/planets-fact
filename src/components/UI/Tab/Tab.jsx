import React from "react";
import styles from "./Tab.module.scss";
import MediaQuery from "react-responsive";

function Tab({ id, classes, children, handleClick }) {
  return (
    <>
      <MediaQuery minWidth={741}>
        <li className={`${styles.tabDesktop} ${classes}`} onClick={handleClick}>
          <span className={styles.tabID}>{id}</span>
          <h3 className={styles.tabValue}>{children}</h3>
        </li>
      </MediaQuery>
      <MediaQuery maxWidth={740}>
        <li className={`${styles.tabMobile} ${classes}`} onClick={handleClick}>
          <h3 className={styles.tabValue}>{children}</h3>
        </li>
      </MediaQuery>
    </>
  );
}

export default Tab;
