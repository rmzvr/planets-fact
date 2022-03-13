/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Header.module.scss";
import planets from "../../../planets.json";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        The planets
      </Link>
      <nav className={styles.navigation}>
        <ul className={styles.items}>
          {planets.map((planet) => (
            <li
              className={styles.item}
              key={planet.name.toLowerCase()}
              data-planet={planet.name.toLocaleLowerCase()}
            >
              <Link
                className={styles.link}
                to={`/${planet.name.toLowerCase()}`}
              >
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
