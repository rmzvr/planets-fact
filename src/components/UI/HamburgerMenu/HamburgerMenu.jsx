import React from "react";
import styles from "./HamburgerMenu.module.scss";
import { Link } from "react-router-dom";

function HamburgerMenu({ planets, isOpen, setIsOpen }) {
  return (
    <nav className={styles.hamburgerMenu} data-state={isOpen}>
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
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${styles.circle} ${planet.name.toLowerCase()}`}
              ></div>
              <span>{planet.name.toLowerCase()}</span>
              <svg
                className={styles.arrow}
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
              >
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HamburgerMenu;
