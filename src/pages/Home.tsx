import ImageCard from "../components/Image";

export default function Home() {
  return (
    <>
      {/* Section 1 
      -Title (Add picture, Add Video) x
      -Add title wording: I am crucified with Christ… Future impact x
      -Add Button “Get Started”***
       */}

      <b>I am crucified with Christ...</b>

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
