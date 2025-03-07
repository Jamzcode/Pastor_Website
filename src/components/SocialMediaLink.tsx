import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function SocialMediaLink() {
  return (
    <div>
      <a
        href="https://www.instagram.com/futureimpact79"
        target="_blank"
        rel="noopener noreferer"
        className="text-pink-500 hover:text-pink-700 transition-all duration-200"
      >
        <FaInstagram size={32} />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61573732178113"
        target="_blank"
        rel="noopener noreferer"
        className="text-pink-500 hover:text-pink-700 transition-all duration-200"
      >
        <FaFacebook size={32} />
      </a>
      <a
        href="https://www.youtube.com/@futureimpact-q2r?si=tDiVZ_V_-PKozL0k"
        target="_blank"
        rel="noopener noreferer"
        className="text-pink-500 hover:text-pink-700 transition-all duration-200"
      >
        <FaYoutube size={32} />
      </a>
    </div>
  );
}
