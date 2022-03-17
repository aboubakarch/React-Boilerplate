import PropTypes from "prop-types";

import "../config/styles/style.scss";

function Button({
  children,
  className: classes = "",
  onClick,
  style,
  type = "primary",
  ...otherProps
}) {
  const btnClasses = `btn ${
    type === "secondary" ? "btn-secondary" : "btn-primary"
  } ${classes}`;

  return (
    <button
      className={btnClasses}
      onClick={onClick}
      style={style}
      {...otherProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
