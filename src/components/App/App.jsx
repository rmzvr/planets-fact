import Header from "../Header/Header";
import Tab from "../UI/Tab/Tab";
import Card from "../UI/Card/Card";
import styles from "./App.module.scss";
import img from "../../assets/planet-mercury.svg";
import planets from "../../data.json";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <main className={styles.main}>
          <img
            className={styles.image}
            src={img}
            alt="marcury"
            width="290"
            height="290"
          />
          <div className={styles.about}>
            <h1 className={styles.title}>{planets[0].name}</h1>
            <p className={styles.content}>{planets[0].overview.content}</p>
            <p className={styles.source}>
              <span className={styles.sourceLabel}>Source : </span>
              <a
                className={styles.sourceLink}
                href={planets[0].overview.source}
                target="_blank"
                rel="noreferrer"
              >
                Wikipedia
              </a>
              <svg
                className={styles.sourceImage}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
              >
                <path
                  fill="#FFF"
                  d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                  opacity=".5"
                />
              </svg>
            </p>
          </div>
          <ul className={styles.tabs}>
            <Tab count="01">Overview</Tab>
            <Tab count="02">Internal Structure</Tab>
            <Tab count="03">Surface Geology</Tab>
          </ul>
          <ul className={styles.stats}>
            <Card category="ROTATION TIME">{planets[0].rotation}</Card>
            <Card category="REVOLUTION TIME">{planets[0].revolution}</Card>
            <Card category="RADIUS">{planets[0].radius}</Card>
            <Card category="AVERAGE TEMP.">{planets[0].temperature}</Card>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
