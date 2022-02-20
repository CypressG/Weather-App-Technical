/* eslint-disable react/require-default-props */
import "./style.scss";
import { BiSearch } from "react-icons/bi";
import PropTypes from "prop-types";

const SearchBar = ({ handleSubmit, query, setQuery }) => (
  <form onSubmit={handleSubmit}>
    <input
      id="search"
      type="search"
      value={query}
      pattern=".*\S.*"
      required
      onChange={(e) => setQuery(e.target.value)}
    />
    <BiSearch color="white" size="2rem" id="search-icon" />
  </form>
);

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
  query: PropTypes.string,
  setQuery: PropTypes.func,
};

SearchBar.defaultProps = {
  query: "N/a",
};
export default SearchBar;
