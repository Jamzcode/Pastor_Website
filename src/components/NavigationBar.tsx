import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <nav style={navStyle}>
        <div style={linkListStyle}>
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

const navStyle: React.CSSProperties = {
  backgroundColor: "#8A794E",
};

const linkListStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  backgroundColor: "#8A794E",
  color: "white",
  margin: "0px",
};
