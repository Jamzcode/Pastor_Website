import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Title() {
  const location = useLocation();
  const [title, setTitle] = useState("My Website");

  useEffect(() => {
    const titles: { [key: string]: string } = {
      "/": "Pastor John Ximenez, Sr.",
      "/about": "About Me",
      "/contact": "Contact Me",
      "/mission": "Mission",
      "/gallery": "Outreach",
    };

    const newTitle = titles[location.pathname];
    setTitle(newTitle);
  }, [location.pathname]);

  return <h1>{title}</h1>;
}
