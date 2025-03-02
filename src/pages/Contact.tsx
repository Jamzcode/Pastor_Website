import { Link } from "react-router-dom";

import ImageCard from "../components/Image";

export default function Contact() {
  // TODO: link button to get in touch page.
  return (
    <>
      {/* 
      Section (7)
      -Add title spot for title name (Contact me) x
      -Add spot for 1 picture x
      -Add spot for 1 paragraph x
        *Paragraph to read, “Have I not commanded you be strong and courageous do not be afraid do not be discouraged for the lord your God will be with you wherever you go Joshua 1:19”
        *Additional paragraph to read, “Available for preaching, Weddings, Prayer request- Please subscribe to FUTURE IMPACT”
      -Add spot for phone number x
      -Add spot for email x
      -Add spot for hours of operation x
      -Add “Get in touch” button to lead to gaining contact information of potential clients x
      */}
      
      {/* Title */}
      Contact Me
      
      {/* Headshot */}
      <ImageCard />
      <p>
        “Have I not commanded you be strong and courageous do not be afraid do
        not be discouraged for the lord your God will be with you wherever you
        go Joshua 1:19” +Additional paragraph to read, “Available for preaching,
        Weddings, Prayer requests.”
      </p>

      {/* TODO: make card to display contact information. */}
      <div>Pastor John Ximenez, Sr.</div>
      <p>Phone:(210) 705-****</p>
      <p>Email: jaxtenagra@gmail.com</p>
      
      
      
      {/* TODO: link button to GetInTouch page. */}
      <div>
        <Link to="../get-in-touch">Get in Touch</Link>
      </div>
    </>
  );
}
