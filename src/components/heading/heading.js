import "./heading.css";
const Headings = ({ text }) => {
  return (
    <div className="heading-container">
      <h3> {text}</h3>
    </div>
  );
};

export default Headings;
