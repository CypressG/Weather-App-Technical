import PropTypes from "prop-types";
import "./style.scss";
import { BiSearch } from "react-icons/bi";

const SearchBar = (props) => {
  const { idName } = props;
  return (
    <div id={idName}>
      <form>
        <input id="search" type="search" pattern=".*\S.*" required />
        <BiSearch color="white" size="2rem" id="search-icon" />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  idName: PropTypes.string,
};

SearchBar.defaultProps = {
  idName: "default-searchbar-style",
};

export default SearchBar;
