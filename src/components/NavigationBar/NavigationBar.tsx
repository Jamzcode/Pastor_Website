import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <>
      <nav className={styles.navStyle}>
        <div className={styles.linkListStyle}>
          <div>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/mission">
              Mission
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/gallery">
              Gallery
            </Link>
          </div>
          <div>
            <Link className={styles.link} to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
