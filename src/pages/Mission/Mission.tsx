import ImageCard from "../../components/ImageCard/ImageCard";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import mission from "../../assets/mission.jpg";

import styles from "./Mission.module.css";

export default function Mission() {
  return (
    <>
      <div className="page-layout">
        <Header title="Called to be fishers of men. &mdash;MAT 4:19" />

        <div className={`text-bubble ${styles.missionCluster}`}>
          <div className={styles.imageContainer}>
            <ImageCard src={mission} alt="Large Image" size="large" />
          </div>

          <div className={styles.headline}>
            <h2>Mission Statement</h2>
          </div>
          <div className="text">
            Through Future impact, Training and preaching for the youth of
            tomorrow and their impact in the world
          </div>
        </div>
        <div className="button-container">
          <Button label="View Outreach" to="/gallery" />
        </div>
      </div>
    </>
  );
}
