import ImageCard from "../../components/ImageCard/ImageCard";
import Header from "../../components/Header/Header";
import headshot from "../../assets/home-headshot.jpg";
import Form from "../../components/Form/Form";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <div className="page-layout">
        <Header title="Sermons | Weddings | Prayers" />

        <div className={`text-bubble ${styles.contactCluster}`}>
          <div className={styles.imageContainer}>
          {/* <img src="https://placehold.co/330" alt="" /> */}
          
            <ImageCard src={headshot} alt="Large Image" size="large" />
          </div>
          <div className="text">
            <i>
              <b>
                Have I not commanded you? Be strong and courageous. Do not be
                afraid; do not be discouraged, for the Lord your God will be
                with you wherever you go.
              </b>
              &mdash; Joshua 1:19
            </i>
          </div>

          <div className={styles.contactInfo}>
            <div>Pastor John Ximenez, Sr.</div>
            <div>Phone:(210) 705-**** </div>
            <div>Email: jaxtenagra@gmail.com</div>
          </div>

          <div className={styles.formContainer}>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
