import ImageCard from "../components/ImageCard/ImageCard";
import Button from "../components/Button/Button";

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

      {/* <p>
        Welcome to Future Impact! We are creating a site dedicated to deepening
        our understanding of faith, hope, strength, and the honor of our Lord
        Jesus Christ. Our mission is to cultivate a passion for Christ that is
        unlike anything else in this world.
      </p> */}
      {/* <p>
        At Future Impact, we believe faith is not just a belief—it is a way of
        life. Through this platform, we hope to share insights, testimonies, and
        teachings that inspire and uplift others in their walk with Christ. Our
        goal is to build a community rooted in love, perseverance, and
        unwavering devotion to God’s purpose. Whether you are seeking
        encouragement, wisdom, or a deeper relationship with Christ, we are here
        to walk this journey with you.
      </p> */}

      <div>
        <div>
          {/* Headshot */}
          <ImageCard
            src="src\assets\home-headshot.jpg"
            alt="Large Image"
            size="large"
          />
        </div>
        <div>
          <p>
            For 45 years, I have lived my life through Christ. I no longer live
            for myself but solely for the glory and honor of my God. Every step
            I take is guided by His wisdom, and every challenge I face is met
            with the strength He provides.
          </p>
        </div>
      </div>

      {/* <div>
        <ImageCard
          src="src\assets\preaching1.PNG"
          alt="Large Image"
          size="large"
        />
      </div>
      <div>
        <ImageCard
          src="src\assets\home-puppet.PNG"
          alt="Large Image"
          size="large"
        />
      </div> */}

      <Button label="Learn About Me" to="/about" />
    </>
  );
}
