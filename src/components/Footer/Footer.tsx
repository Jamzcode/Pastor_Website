import SocialMediaLink from "../SocialMediaLinks/SocialMediaLink";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      {/* TODO: icons of social media that link to accounts. */}
      <div className={styles.footer}>
        <SocialMediaLink />
        <div className={styles.copyright}>© Copyright 2025</div>
      </div>
    </>
  );
}
