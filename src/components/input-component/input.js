// css
import "./input.css";

const Input = ({ icon, type, name, handleChange }) => {
  return (
    <div className="form-control">
      <label>{icon}</label>
      <input
        className="default-input"
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={name}
      />
    </div>
  );
};
export default Input;
