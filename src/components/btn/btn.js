import "./btn.css";
import { Link } from "react-router-dom";
const Btn = ({ to, text, BgColor, color, event }) => {
  return (
    <Link to={to}>
      <button
        className="homepage-btn"
        style={{
          backgroundColor: BgColor,
          color: color,
          border: `2px solid ${color}`,
        }}
        onClick={event}
      >
        {text}
      </button>
    </Link>
  );
};
export default Btn;
