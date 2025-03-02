import ImageCard from "../components/Image";

export default function Gallery() {
// TODO: create image gallery divided by fields of outreach.
// TODO: clicking on image will enlarge the image.
// TODO: link button to connect to contact page.

  return (
    <>
      {/* Section (3)
      -Add title spot for title name (John Ximenez and his puppet mania)x
      -Add spot for 6 picture photo gallery(Rotational)x
      */}
      
      
      <h1>Outreach</h1>
      <h3>Pastor John Ximenez, Sr. | Puppet Mania</h3>
      <p>Scripture and teachings thru puppets and humor... learning while having fun!</p>

      {/* Section (4)
      -Add title spot for title ( Available for preaching the word of God, Available for weddings as well)x
      */}

      {/* Gallery Section */}
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />

      <h3> Available for sharing the word of God & Wedding services</h3>

      {/* Button */}
      <button>Get in Touch</button>
    </>
  );
}
