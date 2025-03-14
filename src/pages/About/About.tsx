import styles from "./About.module.css";
// import ImageCard from "../../components/ImageCard/ImageCard";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

// import preaching from "../../assets/about-preaching.jpg";

export default function About() {
  return (
    <>
      <div className="page-layout">
        <Header title="Pastor John Ximenez, Sr." />

        <div className="text-bubble">
          <div className={styles.imageContainer}>
            {/* <ImageCard src={preaching} alt="Large Image" size="large" /> */}
          </div>

          <div className={styles.headline}>
            <h2>BIO</h2>
          </div>

          <div className="text">
            <div>
              <p>
                <strong>Reverend John Ximenez</strong> was 15 years old when he
                began following the Lord Jesus Christ as his personal Savior.
              </p>

              <p>
                At the age of 15, Reverend John Ximenez began using puppets for
                Christ and served as a youth leader at South San Mexican Baptist
                Church in San Antonio, Texas.
              </p>

              <p>
                During this time, John worked with various types of puppets and
                dramas, which were used at the church and in different locations
                to teach the Word and minister to the youth in the community.
              </p>

              <p>
                At the age of 18, John started his youth ministry called{" "}
                <strong>Puppets and Clowns for Christ</strong>, which was later
                renamed <strong>John Ximenez and His Puppets</strong>.
              </p>

              <p>
                This ministry allowed John to train and mentor youth aged 12 to
                18. As the ministry expanded, it performed shows and events in
                the San Antonio area as well as in West Texas.
              </p>

              <p>
                He was able to evangelize through puppet ministry during
                week-long evangelism tours, which led to the expansion of his
                ministry citywide. This growth included youth choirs and drama
                performances in various churches and faith communities.
              </p>

              <p>
                John is currently pastoring at{" "}
                <strong>Palm Heights Baptist Church</strong> and is also
                building an organization called{" "}
                <strong>Future Impact 79</strong>.
              </p>

              <p>
                This organization focuses on youth training, youth empowerment,
                and puppet ministry, as well as developing future church leaders
                through evangelism, puppeteering, drama, and youth ministry.
              </p>

              <p>
                With 42 years of ministry experience, Reverend John hopes to
                equip youth directors and leaders with a deeper understanding of
                working with today's youth in an ever-changing world.
              </p>
            </div>
          </div>
        </div>

        <div className="button-container">
          <Button label="view gallery" to="/gallery" />
        </div>
      </div>
    </>
  );
}
