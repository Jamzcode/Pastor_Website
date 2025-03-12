import ImageCard from "../../components/ImageCard/ImageCard";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import mission from "../../assets/mission.jpg";

import styles from "./Mission.module.css";

export default function Mission() {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.headline}>
          <Header title="Called to be fishers of men. &mdash;MAT 4:19" />
        </div>

        <div className={`text-bubble ${styles.missionCluster}`}>
          <div className={styles.imageContainer}>
            <ImageCard src={mission} alt="Large Image" size="large" />
          </div>
          <div className={styles.headline}>
            <h2>Mission Statement</h2>
          </div>
          Through Future impact, Training and preaching for the youth of
          tomorrow and their impact in the world
        </div>
        <div className={styles.buttonContainer}>
          <Button label="View Outreach" to="/gallery" />
        </div>
      </div>
    </>
  );
}
