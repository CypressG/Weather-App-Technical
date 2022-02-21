import "./style.scss";
import PropTypes from "prop-types";
import styled from "styled-components";

const Headline = (props) => {
  const { text, size, align } = props;
  const Text = styled.h1`
    font-size: ${size};
    text-align: ${align};
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
  align: PropTypes.string,
};
Headline.defaultProps = {
  text: "Results",
  size: "3rem",
  align: "center",
};
export default Headline;
