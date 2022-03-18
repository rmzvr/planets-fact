import React from "react";
import styles from "./SolarSystem.module.scss";
import planets from "../../planets.json";
import { Link } from "react-router-dom";

function SolarSystem() {
  return (
    <main>
      <div className={styles.universe}>
        <div className={styles.galaxy}>
          <div className={styles.solarSystem}>
            <div className={styles.sun}></div>
            {planets.map((item) => (
              <div
                className={`${styles[item.name.toLowerCase()]} ${styles.orbit}`}
                key={item.name}
              >
                <div className={styles.pos}>
                  <Link
                    className={styles.planet}
                    to={`/${item.name.toLowerCase()}`}
                    aria-label={item.name}
                  >
                    {item.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SolarSystem;
