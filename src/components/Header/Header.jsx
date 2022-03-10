/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Header.module.scss";
import planets from "../../data.json";

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        The planets
      </a>
      <nav className={styles.navigation}>
        <ul>
          {planets.map((planet) => (
            <li key={planet.name.toLowerCase()}>
              <a href={`/${planet.name.toLowerCase()}`}>{planet.name.toLowerCase()}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
