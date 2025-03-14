import Button from "../../components/Button/Button";
import ImageCard from "../../components/ImageCard/ImageCard";
import Header from "../../components/Header/Header";
import styles from "./Gallery.module.css";

import pic1 from "../../assets/gallery-puppet1.jpg";
import pic2 from "../../assets/gallery-puppet2.jpg";
import pic3 from "../../assets/gallery-FI1.jpg";
import pic4 from "../../assets/gallery-FI2.jpg";
import pic5 from "../../assets/pexels-megapixelstock-17834.jpg";
import pic6 from "../../assets/pexels-pixabay-265856.jpg";

export default function Gallery() {
  return (
    <>
      <div className={`page-layout ${styles.layout}`}>
        <Header title="Reaching the community, sharing the good news." />

        <div className={`text-bubble ${styles.galleryCluster}`}>
          <h2>Puppet Mania</h2>
          <div className="text">
            puppet ministry Thru training and presentation of plays and dramas,
            we created a deeper relationship with our church, community, and
            Christ.
          </div>
          <div className={styles.imageContainer}>
            <ImageCard src={pic1} alt="Small Image" size="small" />
            <ImageCard src={pic2} alt="Small Image" size="small" />
          </div>
        </div>

        <div className={`text-bubble ${styles.galleryCluster}`}>
          <h2>Future Impact</h2>
          <div className="text">
            as a program started in early 2000s with the goal of reaching youth
            for the ministry, thru training at a younger age, can strengthen
            knowledge of Christ, and bring a better understanding of walking
            with faith, achieving that goal, as the youth grow older, they can
            take the role of older Christians, and continue the legacy of
            Christ.and build stronger bonds to their christanity
          </div>
          <div className={styles.imageContainer}>
            <ImageCard src={pic3} alt="Small Image" size="small" />
            <ImageCard src={pic4} alt="Small Image" size="small" />
          </div>
        </div>

        <div className={`text-bubble ${styles.galleryCluster}`}>
          <h2>Matrimony</h2>
          <div className="text">
            as a licensed minister can perform weddings for your special
            occasion. Quinceaneras, per request as well. Special wedding service
            with Knight and medieval clergy available
          </div>
          <div className={styles.imageContainer}>
            <ImageCard src={pic5} alt="Small Image" size="small" />
            <ImageCard src={pic6} alt="Small Image" size="small" />
          </div>
        </div>

        <div className={styles.inquire}>
          <i>Inquire now for wedding services, etc.</i>
        </div>

        <div className="button-container">
          <Button label="Get in Contact" to="/contact" />
        </div>
      </div>
    </>
  );
}
