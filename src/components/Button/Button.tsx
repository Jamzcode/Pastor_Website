import { useNavigate } from "react-router-dom";

import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  to?: string;
  onClick?: () => void;
}

export default function Button({ label, to, onClick }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button onClick={handleClick} className={styles.button}>
        {label}
      </button>
    </>
  );
}
