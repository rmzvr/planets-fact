/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import styles from "../components/App/App.module.scss";
import planets from "../planets.json";
import useImage from "../utils/useImage";
import getPlanet from "../utils/getPlanet";
import Source from "../components/UI/Source/Source";
import TabList from "../components/UI/Tab/TabList";
import CardList from "../components/UI/Card/CardList";

function Jupiter() {
  const [activeTab, setActiveTab] = useState("overview");
  const planet = getPlanet(planets);
  const { image } = useImage(planet, activeTab);

  return (
    <div className="container">
      <main className={`${styles.main} ${planet.name.toLowerCase()}`}>
        <img className={styles.image} src={image} alt={planet.name} />
        <div className={styles.about}>
          <h1 className={styles.title}>{planet.name}</h1>
          <p className={styles.content}>{planet[activeTab].content}</p>
          <Source planet={planet} activeTab={activeTab} />
        </div>
        <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
        <CardList planet={planet} />
      </main>
    </div>
  );
}

export default Jupiter;
