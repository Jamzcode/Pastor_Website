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
            Your Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </div>

        <div>
          <label>
            Message: <textarea name="message"></textarea>
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
