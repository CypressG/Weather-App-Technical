import PropTypes from "prop-types";
import "./style.scss";

const Logo = (props) => {
  const { idName } = props;
  return (
    <div id={idName}>
      <h1>airbuddy</h1>
    </div>
  );
};

Logo.propTypes = {
  idName: PropTypes.string,
};
Logo.defaultProps = {
  idName: "default-logo-style",
};
export default Logo;
