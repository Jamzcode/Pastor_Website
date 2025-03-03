import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavigationBar() {
const [isPressed, setIsPressed] = useState(false);

function toggleNav() {
  // Toggle navBar view
 setIsPressed((prev) => !prev);
 console.log("You've activated handleClick");
}

  if (isPressed) {
    return (
      <nav style={navStyle}>
        <Link to="./">Home</Link>
        <Link to="./about">About</Link>
        <Link to="./mission">Mission</Link>
        <Link to="./gallery">Gallery</Link>
        <Link to="./contact">Contact</Link>
        <button onClick={toggleNav}>-</button>
      </nav>
    );
  } else {
    return (
      <>
        <button onClick={toggleNav}>+</button>
      </>
    );
  }
}

const navStyle: React.CSSProperties = {
  backgroundColor: "lightcoral",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
