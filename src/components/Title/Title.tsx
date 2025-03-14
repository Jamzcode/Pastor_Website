import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import styles from "./Title.module.css"

export default function Title() {
  const location = useLocation();
  const [title, setTitle] = useState("My Website");

  useEffect(() => {
    const titles: { [key: string]: string } = {
      "/": "Rev. John Ximenez, Sr.",
      "/about": "About Me",
      "/contact": "Contact Me",
      "/mission": "Mission",
      "/gallery": "Outreach",
    };

    const newTitle = titles[location.pathname];
    setTitle(newTitle);
  }, [location.pathname]);

  return (
    <div className={styles.background}>
      <h1 className={styles.headline}>{title}</h1>
    </div>
  );
}
