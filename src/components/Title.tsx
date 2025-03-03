import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Title() {
  const location = useLocation();
  const [title, setTitle] = useState("My Website");

  useEffect(() => {
    const titles: { [key: string]: string } = {
      "/": "Pastor John Ximenez, Sr. | Puppet Mania | Future Impact",
      "/about": "About",
      "/contact": "Contact",
      "/mission": "Mission",
      "/gallery": "Gallery",

    };

    const newTitle = titles[location.pathname];
    setTitle(newTitle);
  }, [location.pathname]);

  return <h1 style={titleStyle}>{title}</h1>;
}

const titleStyle: React.CSSProperties = {
  backgroundColor: "gray",
};
