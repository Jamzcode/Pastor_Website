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
      <div>
        Headshot
        <ImageCard
          src="https://placehold.co/400x200"
          alt="Large Image"
          size="large"
        />
      </div>

      <div>
        FutureImpact
        <ImageCard
          src="https://placehold.co/400x200"
          alt="Large Image"
          size="large"
        />
      </div>

      <div>
        PuppetMania
        <ImageCard
          src="https://placehold.co/400x200"
          alt="Large Image"
          size="large"
        />
      </div>
    </>
  );
}
