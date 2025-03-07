import SocialMediaLink from "./SocialMediaLink";


export default function Footer() {
  return (
    <>
      {/* TODO: icons of social media that link to accounts. */}
      <div style={footerStyle}>
        <div>
          <SocialMediaLink />
          <p>© Copyright 2025</p>
        </div>
      </div>
    </>
  );
}

const footerStyle: React.CSSProperties = {
  border: "solid black 1px",
  backgroundColor: "goldenrod",
};
