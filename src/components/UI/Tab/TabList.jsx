import React from "react";
import Tab from "./Tab";
import styles from "./Tab.module.scss";

function TabList({ activeTab, setActiveTab }) {
  let planetName = window.location.pathname.substring(1);

  const tabs = [
    {
      id: "01",
      category: "overview",
      content: "Overview",
    },
    {
      id: "02",
      category: "structure",
      content: "Internal Structure",
    },
    {
      id: "03",
      category: "geology",
      content: "Surface Geology",
    },
  ];

  return (
    <ul className={`${styles.tabs} ${planetName}`}>
      {tabs.map((tab) => (
        <Tab
          classes={activeTab === tab.category ? "active" : " "}
          id={tab.id}
          data-category={tab.category}
          key={tab.category}
          handleClick={() => setActiveTab(tab.category)}
        >
          {tab.content}
        </Tab>
      ))}
    </ul>
  );
}

export default TabList;
