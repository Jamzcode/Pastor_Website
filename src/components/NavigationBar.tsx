import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav style={navStyle}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Menu"}
        </button>

        {isOpen && (
          <ul style={linkListStyle}>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/mission" onClick={() => setIsOpen(false)}>
                Mission
              </Link>
            
            </li>
            <li>
                <Link to="/gallery" onClick={() => setIsOpen(false)}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Me
                </Link>
              </li>
          </ul>
        )}
      </nav>
    </>
  );
}

const navStyle: React.CSSProperties = {
  backgroundColor: "#3A3A3A",
};

const linkListStyle: React.CSSProperties = {
  backgroundColor: "white"
}