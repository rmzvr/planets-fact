import React from "react";
import Card from "./Card";
import styles from "./Card.module.scss";

function CardList({ planet }) {
  const cards = [
    { category: "ROTATION TIME", statistic: planet.rotation },
    { category: "REVOLUTION TIME", statistic: planet.revolution },
    { category: "RADIUS", statistic: planet.radius },
    { category: "AVERAGE TEMP.", statistic: planet.temperature },
  ];

  return (
    <ul className={styles.stats}>
      {cards.map((card) => (
        <Card category={card.category} key={card.category}>
          {card.statistic}
        </Card>
      ))}
    </ul>
  );
}

export default CardList;
