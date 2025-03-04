export function Footer() {
  return (
    <>
      {/* TODO: icons of social media that link to accounts. */}
      <div>
        <p style={footerStyle}>© Copyright 2025</p>
        <div>
          <button>Facebook</button>
          <button>Instagram</button>
          <button>Youtube</button>
          <button>X(formerly known as Twitter)</button>
          <button>Tiktok</button>
        </div>
      </div>
    </>
  );
}

const footerStyle: React.CSSProperties = {
  border: "solid black 1px",
  backgroundColor: "goldenrod",
};
