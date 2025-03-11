import styles from "./Form.module.css";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

  return (
    <>
    <div ></div>
      <form
      className={styles.formContainer}
      name="contact"
      method="POST"
      data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact"/>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
      </form>
    </>
  );
}
