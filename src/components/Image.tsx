export default function ImageCard() {
  return (
    <>
      <div>
        <img style={styles.image} src="https://placehold.co/600x400" alt="" />
      </div>
    </>
  );
}

const styles = {
  image:{
    border: "solid black 1px"
  }
}
