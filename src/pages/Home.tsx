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
        <ImageCard />
      </div>

      <div>
        FutureImpact
        <ImageCard />
      </div>

      <div>
        PuppetMania
        <ImageCard />
      </div>
    </>
  );
}
