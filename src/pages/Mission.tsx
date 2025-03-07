import ImageCard from "../components/ImageCard";

export default function Mission() {
  return (
    <>
      {/* Section 2 *  
      -Mission Statement (Add spot for Mission Statement Title x
      -Mission statement to read “Called to be fishers of men. MAT 4:19 x
      -Add paragraph spot x
        *Paragraph to read: “Mission Statement: Through Future impact, Training and preaching for the youth of tomorrow and their impact in the world” x
      -Add picture spot x
      -No action Button x
      */}

      {/* Headline */}
      <h1>Called to be fishers of men. MAT 4:19</h1>

      <ImageCard
        src="src\assets\mission.jpg"
        alt="Large Image"
        size="large"
      />

      <p>
        Mission Statement: Through Future impact, Training and preaching for the
        youth of tomorrow and their impact in the world
      </p>
    </>
  );
}
