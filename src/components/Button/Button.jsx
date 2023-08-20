import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({ type, children }) => {
  return <button className={`Button Button--${type}`}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
