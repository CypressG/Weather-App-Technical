import "./style.scss";
import PropTypes from "prop-types";
import styled from "styled-components";

const Headline = (props) => {
  const { text, size } = props;
  const Text = styled.h1`
    font-size: ${size};
  `;
  return (
    <div className="headline">
      <Text>{text}</Text>
    </div>
  );
};

Headline.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
};
Headline.defaultProps = {
  text: "Results",
  size: "4rem",
};
export default Headline;
