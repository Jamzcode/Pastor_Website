import { FaInstagram } from "react-icons/fa";

export default function SocialMediaLink() {
  return (
    <a
      href="https://www.instagram.com/godzilla_toho/?hl=en"
      target="_blank"
      rel="noopener noreferer"
      className="text-pink-500 hover:text-pink-700 transition-all duration-200"
    >
      <FaInstagram size={32} />
    </a>
  );
}
