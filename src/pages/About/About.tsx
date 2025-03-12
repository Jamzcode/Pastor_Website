import styles from "./About.module.css";
import ImageCard from "../../components/ImageCard/ImageCard";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

import preaching from "../../assets/about-preaching.jpg";

export default function About() {
  return (
    <>
      {/* Headline */}
      <Header title="Pastor John Ximenez, Sr." />

      <div className={`text-bubble ${styles.bioCluster}`}>
        <div className={styles.imageContainer}>
          <ImageCard src={preaching} alt="Large Image" size="large" />
        </div>
        <div className={styles.header}>
          <h2>BIO</h2>
        </div>
        Been in the ministry for 42 years. Puppeteer for 42 years, youth
        minister for 36 years. Current pastor @ Palm Heights Baptist Church, San
        Antonio, TX
        <br />
        Servant of the most high. Ministry of youth is my passion. Worked as
        youth minister for 42 years as a minister, life coach, and friend.
        Developing character, and code for today's youth. As a puppeteer, worked
        and trained youth the skills necessary to teach the values of
        Christianity, thru teaching comedy and drama. As a licensed minister,
        pastor church in the spiritual realm of this world thru scripture and
        example.
        <br />
        42 years as a youth director/minister, working with youth from ages 12
        to 18 yrs. Youth camp counselor, training of youth thru youth study
        groups, thru training of puppet ministry, dramas, and training youth for
        future roles of church ministries. course work in child phychology,
        Pastoral ministry at Seacroft Baptist church
      </div>
      <div className={styles.buttonContainer}>
        <Button label="view gallery" to="/gallery" />
      </div>
    </>
  );
}
