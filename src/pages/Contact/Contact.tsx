import ImageCard from "../../components/ImageCard/ImageCard";
import Header from "../../components/Header/Header";
import headshot from "../../assets/home-headshot.jpg";
import Form from "../../components/Form/Form";
import InfoCard from "../../components/InfoCard/InfoCard";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      {/* Headline */}
      <Header title="Sermons | Weddings | Prayers" />
      {/* Headshot */}
      <ImageCard src={headshot} alt="Large Image" size="large" />
      <div className={styles.verse}>
        <i>
          <b>
            Have I not commanded you? Be strong and courageous. Do not be
            afraid; do not be discouraged, for the Lord your God will be with
            you wherever you go.
          </b>
          &mdash; Joshua 1:19
        </i>
      </div>

      <InfoCard />

      <Form />
    </>
  );
}
