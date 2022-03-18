import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import planets from "../../../planets.json";
import MediaQuery from "react-responsive";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Header() {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/">The planets</Link>
      </h1>
      <MediaQuery minWidth={741}>
        <nav>
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
      </MediaQuery>
      <MediaQuery maxWidth={740}>
        <svg
          className={styles.hamburgerMenuIcon}
          onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
        >
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
        <HamburgerMenu
          planets={planets}
          isOpen={hamburgerIsOpen}
          setIsOpen={setHamburgerIsOpen}
        />
      </MediaQuery>
    </header>
  );
}

export default Header;
