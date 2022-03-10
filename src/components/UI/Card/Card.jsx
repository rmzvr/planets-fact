import React from "react";
import styles from "./Card.module.scss";

function Card({ category, children }) {
  return (
    <li className={styles.card}>
      <span className={styles.category}>{category}</span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}

export default Card;
