import { Link } from "react-router-dom";

import ImageCard from "../components/ImageCard";

export default function Home() {
  return (
    <>
      {/* Section 1 
      -Title (Add picture, Add Video) x
      -Add title wording: I am crucified with Christ… Future impact x
      -Add Button “Get Started”***
       */}
      {/* Headline */}
      <h1>I am crucified with Christ...</h1>
      {/* TODO: Who you are bit */}
      {/* TODO: Create links to appropriate pages via clicking on pics*/}
      <p>
        welcome to future impact, we are creating a site to better understand
        faith, hope strength and the honor of our Lord Jesus Christ. To make it
        a passion unlike any other in this world. 45 years of life thru Christ,
        I myself no longer live.. but only for the honor of my God.
      </p>

      <button>
        <Link to="/about">Learn About Me</Link>
      </button>

      <div style={{ backgroundColor: "#FFFFC5" }}>
        Headshot
        <ImageCard
          src="src\assets\home-headshot.jpg"
          alt="Large Image"
          size="large"
        />
      </div>
      <div>
        FutureImpact
        <ImageCard
          src="src\assets\preaching1.PNG"
          alt="Large Image"
          size="large"
        />
      </div>
      <div>
        PuppetMania
        <ImageCard
          src="src\assets\home-puppet.PNG"
          alt="Large Image"
          size="large"
        />
      </div>
    </>
  );
}
