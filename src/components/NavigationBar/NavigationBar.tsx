import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";



export default function NavigationBar() {
  return (
    <>
      <nav className={styles.navStyle}>
        <div className={styles.linkListStyle}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/mission">Mission</Link>
          </div>
          <div>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div>
            <Link to="/contact">Contact Me</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
