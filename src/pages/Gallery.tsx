import { Link } from "react-router-dom";

import ImageCard from "../components/ImageCard";

export default function Gallery() {
  // TODO: clicking on image will enlarge the image.
  // TODO: link button to connect to contact page.

  return (
    <>
      {/* Section (3)
      -Add title spot for title name (John Ximenez and his puppet mania)x
      -Add spot for 6 picture photo gallery(Rotational)x
      */}
      {/* Section (4)
      -Add title spot for title ( Available for preaching the word of God, Available for weddings as well)x
      */}
      {/* Headline */}
      <h1>Reaching the community, sharing the good news.</h1>
      {/* TODO: Gallery for puppet ministry*/}
      <div>
        <h3>Puppet Mania</h3>
        <p>
          puppet ministry Thru training and presentation of plays and dramas, we
          created a deeper relationship with our church, community, and Christ.
        </p>
      </div>
      <div className="image-slide" style={imageSlide}>
        <ImageCard
          src="src\assets\gallery-puppet1.jpg"
          alt="Small Image"
          size="small"
        />
        <ImageCard
          src="src\assets\gallery-puppet2.jpg"
          alt="Small Image"
          size="small"
        />
      </div>
      {/* TODO: Gallery for youth ministry*/}
      <div>
        <h3>Future Impact</h3>
        <p>
          as a program started in early 2000s with the goal of reaching youth
          for the ministry, thru training at a younger age, can strengthen
          knowledge of Christ, and bring a better understanding of walking with
          faith, achieving that goal, as the youth grow older, they can take the
          role of older Christians, and continue the legacy of Christ.and build
          stronger bonds to their christanity
        </p>
      </div>
      <div style={imageSlide}>
        <ImageCard
          src="src\assets\gallery-FI1.PNG"
          alt="Small Image"
          size="small"
        />
        <ImageCard
          src="src\assets\gallery-FI2.PNG"
          alt="Small Image"
          size="small"
        />
      </div>
      {/* TODO: Gallery for wedding services*/}

      <div>
        <h3>Matrimony</h3>
        <p>
          as a licensed minister can perform weddings for your special occasion.
          Quinceaneras, per request as well. Special wedding service with Knight
          and medieval clergy available
        </p>
      </div>
      <div style={imageSlide}>
        <ImageCard
          src="https://placehold.co/400x200"
          alt="Small Image"
          size="small"
        />
        <ImageCard
          src="https://placehold.co/400x200"
          alt="Small Image"
          size="small"
        />
      </div>
      <h3>Inquire now for wedding services, etc.</h3>
      {/* Button */}
      <button >
       
        <Link to="/contact"> Get in Contact</Link>
      </button>
    </>
  );
}

const imageSlide: React.CSSProperties = {
  border: "solid black 1px",
  display: "flex",
  justifyContent: "space-evenly",
};
