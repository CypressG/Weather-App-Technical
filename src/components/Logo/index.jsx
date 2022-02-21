import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";

const Logo = (props) => {
  const { idName } = props;
  return (
    <Link to="/" id={idName}>
      <h1>airbuddy</h1>
    </Link>
  );
};

Logo.propTypes = {
  idName: PropTypes.string,
};
Logo.defaultProps = {
  idName: "default-logo-style",
};
export default Logo;
