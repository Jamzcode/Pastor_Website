import ImageCard from "../components/Image";

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

      <h1>Reaching the community, sharing the good news.</h1>

      {/* TODO: Gallery for puppet ministry*/}
      <div>
        <h3>Puppet Mania</h3>
        <p>
          Scripture and teachings thru puppets and humor... learning while
          having fun!
        </p>
      </div>
      <ImageCard />
      <ImageCard />

      {/* TODO: Gallery for youth ministry*/}
      <div>
        <h3>Future Impact</h3>
        <p>
          Teaching Youth to be good people through the teachings of the Bible.
        </p>
      </div>
      <ImageCard />
      <ImageCard />


       {/* TODO: Gallery for wedding services*/}
      <div>
        <h3>Matrimony</h3>
        <p>
          Officiating with a God centric service
        </p>
      </div>
      <ImageCard />
      <ImageCard />

      <h3>Inquire now for wedding services, etc.</h3>

      {/* Button */}
      <button>Get in Touch</button>
    </>
  );
}
