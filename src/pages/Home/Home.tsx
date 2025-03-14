// import ImageCard from "../../components/ImageCard/ImageCard";
import Button from "../../components/Button/Button";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";

// import headshot from "../../assets/home-headshot.jpg";

export default function Home() {
  return (
    <>
      <div className="page-layout">
        <Header title="I am Crucified with Christ" />

        <div className={`text-bubble ${styles.heroCluster}`}>
          {/* <ImageCard src={headshot} alt="Large Image" size="large" /> */}
          <img src="https://placehold.co/330" alt="" />
          <div className="text">
            For 45 years, I have lived my life through Christ. I no longer live
            for myself but solely for the glory and honor of my God. Every step
            I take is guided by His wisdom, and every challenge I face is met
            with the strength He provides.
          </div>
        </div>

        <div className="button-container">
          <Button label="Learn About Me" to="/about" />
        </div>
      </div>
    </>
  );
}
