import ImageCard from "../components/ImageCard";

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
      <h1>Send a Message!</h1>
      {/* Headshot */}
      <ImageCard
        src="src\assets\home-headshot.jpg"
        alt="Large Image"
        size="large"
      />
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

      <>
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
        <div>
          <h3>Name:</h3>
          <input />

          <h3>Email:</h3>
          <input />

          <h3>Phone:</h3>
          <input />

          <h3>Notes:</h3>
          <input />

          {/* TODO: create function for button to submit user info for processing.*/}
        </div>
        <button onClick={() => alert("You submitted info!")}>Submit Info</button>
      </>
    </>
  );
}
