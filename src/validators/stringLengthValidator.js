const stringLengthValidator = (text, minLength, maxLength) =>
  text.length >= minLength && text.length <= maxLength;

export default stringLengthValidator;
