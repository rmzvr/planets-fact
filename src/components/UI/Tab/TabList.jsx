import React from "react";
import Tab from "./Tab";
import styles from "./Tab.module.scss";
import MediaQuery from "react-responsive";

function TabList({ activeTab, setActiveTab }) {
  let planetName = window.location.hash.substring(2);

  const tabs = [
    {
      id: "01",
      category: "overview",
      content: {
        desktop: "Overview",
        mobile: "Overview",
      },
    },
    {
      id: "02",
      category: "structure",
      content: {
        desktop: "Internal Structure",
        mobile: "Structure",
      },
    },
    {
      id: "03",
      category: "geology",
      content: {
        desktop: "Surface Geology",
        mobile: "Surface",
      },
    },
  ];

  return (
    <>
      <MediaQuery minWidth={741}>
        <ul className={`${styles.tabsDesktop} ${planetName}`}>
          {tabs.map((tab) => (
            <Tab
              classes={activeTab === tab.category ? "active" : " "}
              id={tab.id}
              data-category={tab.category}
              key={tab.category}
              handleClick={() => setActiveTab(tab.category)}
            >
              {tab.content.desktop}
            </Tab>
          ))}
        </ul>
      </MediaQuery>
      <MediaQuery maxWidth={740}>
        <ul className={`${styles.tabsMobile} ${planetName}`}>
          {tabs.map((tab) => (
            <Tab
              classes={activeTab === tab.category ? "active" : " "}
              id={tab.id}
              data-category={tab.category}
              key={tab.category}
              handleClick={() => setActiveTab(tab.category)}
            >
              {tab.content.mobile}
            </Tab>
          ))}
        </ul>
      </MediaQuery>
    </>
  );
}

export default TabList;
