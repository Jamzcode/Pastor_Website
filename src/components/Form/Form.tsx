import styles from "./Form.module.css";
import btnstyle from "../Button/Button.module.css";

export default function ContactForm() {
  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className={styles.formContainer}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label>
            <div className={styles.input}>
              Your Name: <input type="text" name="name" />
            </div>
          </label>
        </div>
        <div>
          <label>
            <div className={styles.input}>
              Your Email: <input type="email" name="email" />
            </div>
          </label>
        </div>

        <div>
          <label>
            <div className={styles.messageBox}>
              Message: <textarea name="message"></textarea>
            </div>
          </label>
        </div>
        <div className={styles.btnContainer}>
          <button type="submit" className={btnstyle.button}>
            Submit Info
          </button>
        </div>
      </form>
    </>
  );
}
