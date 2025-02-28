import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav style={styles.navigation}>
      <Link to="./about">About</Link>
      <Link to="./tour">Find a Tour</Link>
      <Link to="./contact">Schedule a Visit</Link>
      <Link to="./gallery">Gallery</Link>
      <Link to="./contact">Contact Us</Link>
    </nav>
  );
}

const styles = {
  navigation: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "space-around"
  },
};
