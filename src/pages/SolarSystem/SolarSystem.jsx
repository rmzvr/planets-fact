import React from "react";
import styles from "./SolarSystem.module.scss";
import planets from "../../planets.json";

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
                  <div className={styles.planet}></div>
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
