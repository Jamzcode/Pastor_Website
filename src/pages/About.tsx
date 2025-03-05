import ImageCard from "../components/ImageCard";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <>
      {/* Headline */}
      <h1>Pastor John Ximenez, Sr.</h1>

      <ImageCard
        src="src\assets\about-preaching.PNG"
        alt="Small Image"
        size="large"
      />

      <h2>BIO</h2>

      {/* TODO: Revise bio, condense paragraphs */}
      <p>
        Been in the ministry for 42 years. Puppeteer for 42 years, youth
        minister for 36 years. Current pastor @ Palm Heights Baptist Church, San
        Antonio, TX
      </p>

      <p>
        Servant of the most high. Ministry of youth is my passion. Worked as
        youth minister for 42 years as a minister, life coach, and friend.
        Developing character, and code for today's youth. As a puppeteer, worked
        and trained youth the skills necessary to teach the values of
        Christianity, thru teaching comedy and drama. As a licensed minister,
        pastor church in the spiritual realm of this world thru scripture and
        example.
      </p>
      <p>
        42 years as a youth director/minister, working with youth from ages 12
        to 18 yrs. Youth camp counselor, training of youth thru youth study
        groups, thru training of puppet ministry, dramas, and training youth for
        future roles of church ministries. course work in child phychology,
        Pastoral ministry at Seacroft Baptist church
      </p>

      <button>
        <Link to="/gallery">View Gallery</Link>
      </button>
    </>
  );
}
