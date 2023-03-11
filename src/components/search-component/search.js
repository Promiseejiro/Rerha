import "./search.css";
import { BsSearch } from "react-icons/bs";

const SearchComponent = ({ width }) => {
  return (
    <div className="mobile-search">
      <div
        className="mobile-search-control"
      
      >
        <BsSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchComponent;
