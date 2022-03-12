/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../components/App/App.module.scss";
import planets from "../data.json";
import getPlanet from "../utils/getPlanet";
import TabList from "../components/UI/Tab/TabList";
import CardList from "../components/UI/Card/CardList";
import Source from "../components/UI/Source/Source";

function Mercury() {
  const [activeTab, setActiveTab] = useState("overview");
  const [image, setImage] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname.substring(1);
  const planet = getPlanet(planets, currentPath);

  useEffect(() => {
    getImage();
  }, [activeTab]);

  function getImage() {
    const imageName = planet.images[activeTab].match("(?<=s/).*");

    import(`../assets/${imageName}`).then((image) => setImage(image.default));
  }

  return (
    <div className="container">
      <main className={styles.main}>
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

export default Mercury;
