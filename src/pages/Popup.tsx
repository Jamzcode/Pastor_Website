// Section (9)
// -Add title spot for title name (Join our mailing list)x
// -Add spot for client to add email for subscription (Add “Sign up”button)x

export default function Popup() {
  return (
    <>
    <div className="popup-container" style={styles.popupContainer}></div>
      {/* Title */}
      Join our Newsletter/Mailing list:
      <input placeholder="email address" />
      {/* Button to confirm email signup */}
      <button>Sign up</button>
    </>
  );
}

const styles = {
    popupContainer: {
        border: "solid black 1px",
    },
}
