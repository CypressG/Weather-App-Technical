import "./style.scss";
import PropTypes from "prop-types";

const Error = ({ message }) => (
  <div className="error-message">
    <p>{message}</p>
  </div>
);
export default Error;
Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: "This is an error",
};
