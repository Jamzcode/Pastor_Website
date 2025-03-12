import styles from "./InfoCard.module.css"

export default function InfoCard() {
  return (
    <>
      <div className={styles.contactInfo}>
        <div>Pastor John Ximenez, Sr.</div>
        <div>Phone:(210) 705-**** </div>
        <div>Email: jaxtenagra@gmail.com</div>
      </div>
    </>
  );
}
