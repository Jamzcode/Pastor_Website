import { useNavigate } from "react-router-dom";

interface ButtonProps {
  label: string;
  to: string;
}

export default function Button({ label, to }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(to)} style={buttonStyle}>
        {label}
      </button>
    </>
  );
}

const buttonStyle: React.CSSProperties = {
  border: "none",
  backgroundColor: "#6D1B3F",
  color: "white",
};
