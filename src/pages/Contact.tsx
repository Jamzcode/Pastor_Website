import ImageCard from "../components/ImageCard/ImageCard";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import headshot from "../assets/home-headshot.jpg";
import Form from "../components/Form/Form";


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

      {/* Headline */}
      <Header title="Sermons | Weddings | Prayers" />
      {/* Headshot */}
      <ImageCard src={headshot} alt="Large Image" size="large" />
      <p>
        <i>
          Have I not commanded you? Be strong and courageous. Do not be afraid;
          do not be discouraged, for the Lord your God will be with you wherever
          you go. &mdash; Joshua 1:19
        </i>
      </p>

      {/* TODO: make card to display contact information. */}
      <div>
        Pastor John Ximenez, Sr.
        <p>Phone:(210) 705-****</p>
        <p>Email: jaxtenagra@gmail.com</p>
      </div>

      {/* 
      Section (8)
        -Add title spot for title name (Sunday Sermons and more!)
        -Add spot for Facebook link (Add clickable Icon)
        -Add spot for Instagram link (Add clickable Icon)
        -Add spot for TikTok link (Add clickable Icon)
        -Add spot for YouTube link (Add clickable Icon)
      */}

      {/* TODO: create input form component */}
      <div>______________________________</div>
      
      <Form/>

      <Button
        label="Submit Info"
        onClick={() => alert("You submitted info!")}
      />
    </>
  );
}
