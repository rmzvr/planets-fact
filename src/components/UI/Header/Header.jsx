/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Header.module.scss";
import planets from "../../../data.json";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        The planets
      </Link>
      <nav className={styles.navigation}>
        <ul>
          {planets.map((planet) => (
            <li key={planet.name.toLowerCase()}>
              <Link to={`/${planet.name.toLowerCase()}`}>
                {planet.name.toLowerCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
